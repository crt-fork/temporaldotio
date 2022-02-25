import CallOut from "../CallOut";


export const CalloutFooter = () => {
  return (
    <CallOut
      textAlign="center"
      key={'invincibleApps'}
      copy={{
        headline: 'Build invincible apps.',
        subhead: 'There’s never a bad time to be invincible.',
      }}
      className="text-center pt-40 pb-20 lg:pt-96 lg:pb-48"
    />
  );
};

export default CalloutFooter;
