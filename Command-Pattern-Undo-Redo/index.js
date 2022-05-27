const undoRedo = object => {
  let commands = [];
  let redoCommands = [];
  return {
    set:(key, value) => {
      commands.push({
        action: { type:'set', oldKey: !!object[key] },
        inverse: { type:'del', key: key, value: object[key] ? object[key] : value }
      })
      object[key] = value;
    },
    get:(key) => object[key],
    del:(key) => {
      commands.push({
        action: { type:'del', key: key,value: object[key] },
        inverse: { type:'set', key: key, value: object[key] }
      })
      delete object[key]
    },
    undo:() => {
      const lastCommand = commands.pop();
      if (!lastCommand) throw new Error('Bad Attempt');
      switch (lastCommand.inverse.type) {
        case 'del':
          redoCommands.push({
            action: { type:'del', key: lastCommand.inverse.key, value: lastCommand.inverse.value },
            inverse: { type:'set', key: lastCommand.inverse.key,
              value: !lastCommand.action.oldKey ? lastCommand.inverse.value : object[lastCommand.inverse.key]
            }
          });
          if(!lastCommand.action.oldKey) delete object[lastCommand.inverse.key];
          else object[lastCommand.inverse.key] = lastCommand.inverse.value;
          break;
        case 'set':
          redoCommands.push({
            action: { type:'set', key: lastCommand.inverse.key, value: lastCommand.inverse.value },
            inverse: { type:'del', key: lastCommand.inverse.key, value: lastCommand.inverse.value }
          });
          object[lastCommand.inverse.key] = lastCommand.inverse.value;
          break;
        default:
          break;
      }
    },
    redo: () => {
      const lastCommand = redoCommands.pop();
      if (!lastCommand) throw new Error('Bad Attempt');
      switch (lastCommand.inverse.type) {
        case 'del':
          commands.push({
            action: { type:'del', key: lastCommand.inverse.key, value: lastCommand.inverse.value },
            inverse: { type:'set', key: lastCommand.inverse.key, value: lastCommand.inverse.value }
          });
          delete object[lastCommand.inverse.key];
          break;
        case 'set':
          object[lastCommand.inverse.key] = lastCommand.inverse.value;
          commands.push({
            action: { type:'set', key: lastCommand.inverse.key, value: lastCommand.inverse.value },
            inverse: { type:'del', key: lastCommand.inverse.key, value: lastCommand.inverse.value }
          });
          break;
        default:
          break;
      }
    }
  };
};
let obj = undoRedo({
  a: 1,
  b: 2,
  c: 3
});
console.log(obj.get('a'));