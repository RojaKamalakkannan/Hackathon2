export const reducer = (states, actions) => {
    switch (actions.type) {
      case 'ADDITION':
        return { ...states, value: Number(states.val1) + Number(states.val2) };

        default:
        return states;
    }

    
  };
