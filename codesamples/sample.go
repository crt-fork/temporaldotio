func RemindUserWorkflow(ctx workflow.Context, userID string, intervals []int) error {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for _, interval := range intervals {
    _ = workflow.Sleep(ctx, days(interval)) // Sleep for days!
    _ = workflow.ExecuteActivity(ctx, SendEmail, userID).Get(ctx, nil) 
    // Activities have timeouts, and will be retried by default!
  }
  // ...
}
