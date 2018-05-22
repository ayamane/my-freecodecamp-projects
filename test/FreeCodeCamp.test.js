'use strict';

// run from terminal with 'npm test'

const expect = require('expect');
const codecamp = require('./../freecodecamp');

describe('Basic Algorithm Scripting Tests', () => {
  describe('truncateString tests', () => {
    it('should truncates a string and adds elipsis', () => {
      expect(codecamp.truncateString("A-", 1)).toBe("A...");
      expect(codecamp.truncateString("A-tisket a-tasket A green and yellow basket", 11)).toBe("A-tisket...");
      expect(codecamp.truncateString("Absolutely Longer", 2)).toBe("Ab...");
    });
  });

  describe('chunkArrayInGroups tests', () => {
    it('should split an array into groups the length of size', () => {
      expect(codecamp.chunkArrayInGroups(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
      expect(codecamp.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
      expect(codecamp.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toEqual([[0, 1], [2, 3], [4, 5]]);
      expect(codecamp.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
    });
  });

  describe('slasher tests', () => {
    it('should remove n elements from the beginning of the array', () => {
      expect(codecamp.slasher([1, 2, 3], 2)).toEqual([3]);
      expect(codecamp.slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
      expect(codecamp.slasher([1, 2, 3], 9)).toEqual([]);
      expect(codecamp.slasher(["burgers", "fries", "shake"], 1)).toEqual(["fries", "shake"]);
    });
  });

  describe('mutation tests', () => {
    it('should return true if 1st string contains all letters of 2nd string in array', () => {
      expect(codecamp.mutation(["hello", "hey"])).toBeFalsy();
      expect(codecamp.mutation(["hello", "Hello"])).toBeTruthy();
      expect(codecamp.mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBeTruthy();
      expect(codecamp.mutation(["Mary", "Army"])).toBeTruthy();
      expect(codecamp.mutation(["Alien", "line"])).toBeTruthy();
      expect(codecamp.mutation(["hello", "neo"])).toBeFalsy();
      expect(codecamp.mutation(["voodoo", "no"])).toBeFalsy();
    });
  });

  describe('bouncer tests', () => {
    it('should remove "falsy" values from an array', () => {
      expect(codecamp.bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
      expect(codecamp.bouncer(["a", "b", "c"])).toEqual(["a", "b", "c"]);
      expect(codecamp.bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);
      expect(codecamp.bouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]);
    });
  });

  describe('destroyer tests', () => {
    it('should remove values from an array that are contained in 2nd array', () => {
      expect(codecamp.destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
      expect(codecamp.destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
    });
  });

  describe('getIndexToIns test', () => {
    it('should return the lowest index of a sorted array to insert a new value', () => {
      expect(codecamp.getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3);
      expect(codecamp.getIndexToIns([3, 10, 5], 3)).toEqual(0);
      expect(codecamp.getIndexToIns([2, 5, 10], 15)).toEqual(3);
      expect(codecamp.getIndexToIns([2, 20, 10], 19)).toEqual(2);
      expect(codecamp.getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2);
      expect(codecamp.getIndexToIns([5, 3, 20, 3], 5)).toEqual(2);
    });
  });

  describe('rot13 test', () => {
    it('should decode a shift 13 encoded string', () => {
      expect(codecamp.rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP");
      expect(codecamp.rot13("SERR CVMMN!")).toEqual("FREE PIZZA!");
      expect(codecamp.rot13("SERR YBIR?")).toEqual("FREE LOVE?");
      expect(codecamp.rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")).toEqual("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
    });
  });
});
