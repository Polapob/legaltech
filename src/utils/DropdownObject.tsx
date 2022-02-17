export const keyToValueObjects:{[key: string]: number} = {
    "Utility Patent" : 1,
    "Design Patent": 0,
    "Less than 10 pages": 0,
    "More than 10 pages": 1,
    "Don't have a moving part": 0,
    "Have a moving part": 1,
    "Easy":0,
    "Difficult": 1,
    "Don't have a drawing":0,
    "Have a drawing": 1

}

export const dropdownObjects = {
  invention: [
    { selectValue: 0, selectTitle: "Design Patent" },
    { selectValue: 1, selectTitle: "Utility Patent" },
  ],
  typeOfInvention: [
    { selectValue: 0, selectTitle: "Engineering" },
    { selectValue: 1, selectTitle: "Chemical" },
    { selectValue: 2, selectTitle: "Electricity" },
    { selectValue: 3, selectTitle: "Biotechnology" },
    { selectValue: 4, selectTitle: "Pharmacy" },
    { selectValue: 5, selectTitle: "Physic" },
    { selectValue: 6, selectTitle: "Pitro Chemical" },
    { selectValue: 7, selectTitle: "Pitro" },
    { selectValue: 8, selectTitle: "Design 1" },
    { selectValue: 9, selectTitle: "Design 2" },
    { selectValue: 10, selectTitle: "Design 3" },
    { selectValue: 11, selectTitle: "Chemical Engineering" },
    { selectValue: 12, selectTitle: "Food and Cosmetic Patent" },
  ],
  numberOfSheets: [
    { selectValue: 0, selectTitle: "Less than 10 pages" },
    { selectValue: 1, selectTitle: "More than 10 pages" },
  ],
  movingParts: [
    { selectValue: 0, selectTitle: "Don't have a moving part" },
    { selectValue: 1, selectTitle: "Have a moving part" },
  ],
  drawing: [
    { selectValue: 0, selectTitle: "Don't have a drawing" },
    { selectValue: 1, selectTitle: "Have a drawing" },
  ],
  complexity: [
    { selectValue: 0, selectTitle: "Easy" },
    { selectValue: 1, selectTitle: "Difficult" },
  ],
};
export interface dropdownType {
  invention: string;
  typeOfInvention: string;
  numberOfSheets: string;
  movingPart: string;
  drawing: string;
  complexity: string;
}
