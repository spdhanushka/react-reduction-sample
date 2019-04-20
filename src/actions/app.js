export function setState(state) {
    return {
      type: "SET_STATE",
      state
    };
  }
  
  export function clearState() {
    return {
      type: "CLEAR_STATE"
    };
  }
  
  export function setError(data) {
    return {
      type: "SET_ERROR"
    };
  }
  
  export function clearError() {
    return {
      type: "CLEAR_ERROR"
    };
  }
