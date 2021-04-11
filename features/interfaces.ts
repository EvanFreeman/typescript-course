interface Reportable {
  summary(): string;
}

const drink1 = {
  color: 'brown',
  carbonate: true,
  sugar: 40,
  summary(): string {
    return `My dring has ${this.sugater} grams of sugar `;
  },
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink1);
