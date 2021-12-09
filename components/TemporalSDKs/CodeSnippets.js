export const TypeScript = `+async function remindUserWorkflow(userId: string, intervals: number[]) {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for (const interval of intervals) {
-   await wf.sleep(interval + " days");
*   await activities.sendEmail(interval, userId);
  } 
  // Easily cancelled when user unsubscribes
}`;

export const Java = `+public class RemindUserWorkflowImpl implements RemindUserWorkflow {
  public void EmailUser(String userId, int[] intervals) {
    // Send reminder emails, e.g. after 1, 7, and 30 days
    for (int interval : intervals) {
-     Workflow.sleep(Duration.ofDays(interval));
*     activities.sendEmail(interval, userId);
     } 
    // Easily cancelled when user unsubscribes
    } 
}`;

export const PHP = `+class RemindUserWorkflow implements RemindUserWorkflowInterface {
  public function emailUser($userID, $intervals) {
    // Send reminder emails, e.g. after 1, 7, and 30 days
    foreach ($intervals as &$interval) {
-     yield Workflow::timer(CarbonInterval::days($interval));
*     yield $this->userActivity->sendEmail($interval, $userID);
    } // Easily cancelled when user unsubscribes
  } 
}`;

export const Go = `+func PaymentWorkflow(ctx workflow.Context, userID string, intervals []int) error {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for _, interval := range intervals {
-    _ = workflow.Sleep(ctx, days(interval)) // Sleep for days!
*    _ = workflow.ExecuteActivity(ctx, SendEmail, userID).Get(ctx, nil) 
     // Activities have timeouts, and will be retried by default!
  }
  // ...
 }
`;
