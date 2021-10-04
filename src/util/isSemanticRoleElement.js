/**
 * @flow
 */

import type { JSXAttribute } from 'ast-types-flow';
import { AXObjectRoles, elementAXObjects } from 'axobject-query';
import { getLiteralPropValue, getProp, propName } from 'jsx-ast-utils';

const isSemanticRoleElement = (
  elementType: string,
  attributes: Array<JSXAttribute>,
): boolean => {
  const roleAttr = getProp(attributes, 'role');
  const roleAttrValue = getLiteralPropValue(roleAttr);
  const entries = elementAXObjects.entries();
  for (let i = 0; i < entries.length; i += 1) {
    const [
      concept,
      axObjects,
    ] = entries[i];
    if (
      concept.name === elementType
      && (concept.attributes || []).every(
        (cAttr) => attributes.some(
          (attr) => {
            if (!attr.type || attr.type !== 'JSXAttribute') {
              return false;
            }
            const namesMatch = cAttr.name === propName(attr);
            let valuesMatch;
            if (cAttr.value !== undefined) {
              valuesMatch = cAttr.value === getLiteralPropValue(attr);
            }
            if (!namesMatch) {
              return false;
            }
            return namesMatch && (valuesMatch !== undefined) ? valuesMatch : true;
          },
        ),
      )
    ) {
      for (let k = 0; k < axObjects.length; k += 1) {
        const roles = AXObjectRoles.get(axObjects[k]);
        if (roles && roles.some(
          (role) => role.name === roleAttrValue,
        )) {
          return true;
        }
      }
    }
  }
  return false;
};

export default isSemanticRoleElement;
