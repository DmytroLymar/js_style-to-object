'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedObj = {};
  const cleanedString = sourceString.replace(/\/\*[\s\S]*?\*\//g, '');

  cleanedString.split(';').forEach((part) => {
    if (part.trim()) {
      const splitedPart = part.split(':');
      const key = splitedPart[0].trim();
      const value = splitedPart[1].trim();

      formatedObj[key] = value;
    }
  });

  return formatedObj;
}

module.exports = convertToObject;
