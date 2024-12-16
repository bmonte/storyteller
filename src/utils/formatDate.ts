type Options = {
  defaultString?: string;
  hideHour?: boolean;
};

export function formatDate(dateString?: string, options?: Options) {
  if (!dateString) {
    return options?.defaultString ?? '-';
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    hour: options?.hideHour ? undefined : 'numeric',
    minute: options?.hideHour ? undefined : '2-digit',
    hour12: true,
  }).format(date);
}
