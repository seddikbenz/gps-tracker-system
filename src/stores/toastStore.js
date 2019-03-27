import { observable, reaction, action, decorate } from "mobx";

class toastStore {
  toasts = [];
  success(text) {
    this.toasts.push({
      text: text,
      type: "success"
    })
  }
  error(text) {
    this.toasts.push({
      text: text,
      type: "error"
    })
  }
  dismiss(toastID){
    this.toasts.splice(toastID, 1);
  }
}

toastStore = decorate(toastStore, {
  toasts: observable,
  success: action,
  error: action,
});

export default new toastStore();
