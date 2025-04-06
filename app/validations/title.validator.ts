export function isValidTitle(title: string): boolean {
    return typeof title === 'string' && title.trim().length >= 3;
  }
  