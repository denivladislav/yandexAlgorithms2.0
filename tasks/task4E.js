import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const dataLines = lines.slice(1)
    .map((line) => line.trim())
    .filter((trimmedLine) => trimmedLine);

  // console.log(dataLines);

  const state = {
    topics: [],
    messages: [],
  };

  let topicId = 1;
  let msgId = 1;

  dataLines.forEach((item, index) => {
    if (item === '0') {
      state.topics.push({ topicId, text: dataLines[index + 1] });
      state.messages.push({ msgId, text: dataLines[index + 2], topicId });
      topicId += 1;
      msgId += 1;
    } else {
      const parsedNumber = Number(item);
      if (parsedNumber) {
        const [parentMsg] = state.messages.filter((m) => m.msgId === parsedNumber);
        state.messages.push({ msgId, text: dataLines[index + 1], topicId: parentMsg.topicId });
        msgId += 1;
      }
    }
  });

  // console.log(state);

  const topicsAndTheirMsgsData = state.topics.reduce((acc, topic) => {
    const currentTopicId = topic.topicId;
    const currentTopicName = topic.text;
    const msgsInCurrentTopic = state.messages.filter((msg) => msg.topicId === currentTopicId);
    acc.push({
      topicName: currentTopicName,
      topicId: currentTopicId,
      numOfMsgs: msgsInCurrentTopic.length,
    });
    return acc;
  }, []);

  // console.log(topicsAndTheirMsgsData);

  const maxMessages = Math.max(...topicsAndTheirMsgsData.map((topic) => topic.numOfMsgs));
  // console.log(maxMessages);

  const [topicWithMaxMsgs] = topicsAndTheirMsgsData
    .filter((topic) => topic.numOfMsgs === maxMessages);

  console.log(topicWithMaxMsgs.topicName);
});
