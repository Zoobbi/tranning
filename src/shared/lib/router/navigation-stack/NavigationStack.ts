class NavigationStack {
  private stack: string[] = [];

  push(path: string) {
    if (path === this.stack[this.stack.length - 1]) {
      return;
    }

    this.stack.push(path);
  }

  pop(): string | null {
    if (this.stack.length <= 1) return null;
    this.stack.pop();
    
return this.stack[this.stack.length - 1];
  }

  getStack(): string[] {
    return this.stack;
  }

  getCurrent() {
    return this.stack[this.stack.length - 1] || "/";
  }

  replace(path: string) {
    if (this.stack.length > 0) {
      this.stack[this.stack.length - 1] = path;
    } else {
      this.push(path);
    }
  }

  clear() {
    this.stack = [];
  }
}

export const navigationStack = new NavigationStack();
