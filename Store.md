# Redux Store

One store for the entire applciation
 
## Responsibilities

- Holds applciation state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listener)