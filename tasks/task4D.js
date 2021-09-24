import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const numberOfMandates = 450;

  const dataLines = lines.map((line) => line.trim())
    .filter((trimmedLine) => trimmedLine);

  const initialElectionData = dataLines.reduce((acc, line) => {
    const votes = Number(line.slice(line.lastIndexOf(' ')));
    const partyName = (line.slice(0, line.lastIndexOf(' ')));
    if (!acc[partyName]) {
      acc[partyName] = votes;
    } else {
      acc[partyName] += votes;
    }
    return acc;
  }, {});

  // console.log('!!!', initialElectionData);

  const initialSumOfVotes = Object.values(initialElectionData).reduce((acc, item) => acc + item, 0);
  const firstElectionFraction = initialSumOfVotes / numberOfMandates;

  const electionData = Object.keys(initialElectionData)
    .reduce((acc, key) => {
      acc[key] = [
        Math.trunc(initialElectionData[key] / firstElectionFraction),
        initialElectionData[key] % firstElectionFraction,
      ];
      return acc;
    }, {});

  const mandatesAfterFirstRound = Object.values(electionData)
    .reduce((acc, [mandates]) => acc + mandates, 0);

  if (mandatesAfterFirstRound < numberOfMandates) {
    const sortedElectionEntries = Object.entries(electionData)
      .sort(([party1, [, f1]], [party2, [, f2]]) => {
        if (f1 !== f2) {
          return f2 - f1;
        }
        const v1 = initialElectionData[party1];
        const v2 = initialElectionData[party2];
        return v2 - v1;
      });
    let i = 0;
    let mandatesLeft = numberOfMandates - mandatesAfterFirstRound;
    const numberOfParties = sortedElectionEntries.length;
    while (mandatesLeft !== 0) {
      if (i > numberOfParties) {
        i = 0;
      }
      sortedElectionEntries[i][1][0] += 1;
      mandatesLeft -= 1;
      i += 1;
    }
    // console.log(sortedElectionEntries);
    sortedElectionEntries.forEach(([party, [mandates]]) => {
      electionData[party] = mandates;
    });
  } else {
    Object.entries(electionData).forEach(([party, [mandates]]) => {
      electionData[party] = mandates;
    });
  }
  const result = Object.entries(electionData).map(([party, mandates]) => `${party} ${mandates}`);
  console.log(result.join('\n'));
});
