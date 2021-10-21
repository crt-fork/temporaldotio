async function remindUserWorkflow(userId: string, intervals: number[]) {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for (const interval of intervals) {
    await sleep(`${interval} days`); // Sleep for days!
    await activities.sendEmail(interval, userId); // Activities retried by default!
  }
  // Easily cancelled when user unsubscribes
}
