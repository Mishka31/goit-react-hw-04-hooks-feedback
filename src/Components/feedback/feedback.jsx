import { useState } from "react";
import Section from "../section/section.jsx";
import Panel from "../panel/panel.jsx";
import Statistic from "../statistic/statistic.jsx";
import Notification from "../notification/notification.jsx";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonGood = () => setGood(good + 1);
  const onButtonNeutral = () => setNeutral(neutral + 1);
  const onButtonBad = () => setBad(bad + 1);
  const totalSum = () => good + neutral + bad;
  const positivePercentage = () => Math.round((good / totalSum()) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <Panel onGood={onButtonGood} onNeutral={onButtonNeutral} onBad={onButtonBad} />
      </Section>
      <Section title="Statistics">
        {totalSum() > 0 ? (
          <Statistic Good={good} Neutral={neutral} Bad={bad} Total={totalSum()} Positive={positivePercentage()} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
