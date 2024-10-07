const tokenize = (e: string) => {
  return e
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
};

const strongify = (base: string, target: string) => {
  let occurrences = [];
  let index = 0;

  while (index < base.length) {
    const foundIndex = base.indexOf(target, index);

    if (foundIndex !== -1) {
      // Ajouter les caractères avant l'occurrence
      for (let i = index; i < foundIndex; i++) {
        occurrences.push(base[i]);
      }

      for (let i = foundIndex; i < foundIndex + target.length; i++) {
        occurrences.push(<strong>base[i]</strong>);
      }

      const lookupIndex = base.indexOf(target, foundIndex + 1);

      const earlyPattern =
        0 < lookupIndex && lookupIndex < foundIndex + target.length;

      index = foundIndex + target.length;
      if (earlyPattern) {
        const n = target.length - (lookupIndex - foundIndex);
        occurrences.splice(-n);
        index = lookupIndex;
      }
    } else {
      // Ajouter les caractères restants
      for (let i = index; i < base.length; i++) {
        occurrences.push(base[i]);
      }
      break;
    }
  }

  return occurrences;
};

export { tokenize, strongify };
