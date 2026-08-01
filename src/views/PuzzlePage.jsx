"use client";
import React, { useState } from 'react';
import styles from './PuzzlePage.module.css';

const puzzles = [
  {
    id: 1,
    tag: "Pattern Recognition",
    title: "The 100 Lockers",
    pitch:
      "Imagine a hallway with 100 closed lockers and 100 students. Student 1 opens every locker. Student 2 goes to every 2nd locker and toggles it. Student 3 toggles every 3rd locker, and so on until Student 100 toggles just the 100th locker. Which lockers are left open at the end?",
    answer: (
      <>
        <p>A locker is toggled once for each of its <strong>divisors</strong>. Most numbers have an even number of divisors because they pair up (e.g., 12 → 1×12, 2×6, 3×4). An even number of toggles means the locker ends <em>closed</em>.</p>
        <p><strong>Only perfect squares</strong> have an odd number of divisors — because one divisor pair is identical (e.g., 4×4 = 16). An odd number of toggles leaves the locker <em>open</em>.</p>
        <p className={styles.answerHighlight}>∴ The open lockers are: <strong>1, 4, 9, 16, 25, 36, 49, 64, 81, 100</strong> — the 10 perfect squares.</p>
      </>
    ),
  },
  {
    id: 2,
    tag: "Bitwise Thinking",
    title: "The Poisoned Wine",
    pitch:
      "You have 1000 bottles of wine. Exactly one is poisoned. A single drop kills within 24 hours. You have 10 test subjects and exactly 24 hours. What is the minimum number of subjects needed to guarantee you find the poisoned bottle?",
    answer: (
      <>
        <p>Label each bottle in <strong>binary</strong> from 1 to 1000 (which requires 10 bits, since 2¹⁰ = 1024 &gt; 1000).</p>
        <p>Assign each <strong>bit position</strong> to one test subject. Subject 1 drinks from all bottles with a 1 in the first bit, Subject 2 from all with a 1 in the second bit, and so on.</p>
        <p>After 24 hours, the pattern of who died spells out the exact <strong>binary number</strong> of the poisoned bottle.</p>
        <p className={styles.answerHighlight}>∴ The answer is <strong>10 subjects</strong> — one per bit. Most people guess 32 or 50. Binary wins.</p>
      </>
    ),
  },
  {
    id: 3,
    tag: "Logic & Negation",
    title: "The Liars & Truth-Tellers",
    pitch:
      "You're at a fork in the road. One path leads to safety, the other to doom. Two guards stand there: one always tells the truth, the other always lies. You don't know which is which. You can ask only one guard a single yes/no question. What do you ask?",
    answer: (
      <>
        <p>Ask either guard: <em className={styles.quote}>"If I were to ask the <strong>other</strong> guard which path leads to safety, which path would he point to?"</em></p>
        <p>Here's why it works:</p>
        <ul>
          <li>The <strong>truth-teller</strong> truthfully reports that the liar would point to the <em>doom path</em>.</li>
          <li>The <strong>liar</strong> lies and says the truth-teller would point to the <em>doom path</em>.</li>
        </ul>
        <p className={styles.answerHighlight}>∴ Both guards point to doom — so you <strong>take the opposite path</strong>. The double negation cancels out perfectly.</p>
      </>
    ),
  },
  {
    id: 4,
    tag: "Divide & Conquer",
    title: "The Counterfeit Coin",
    pitch:
      "You have 9 identical-looking coins, but one is slightly heavier. You have a two-pan balance scale but no weights. What is the minimum number of weighings required to guarantee you find the fake coin?",
    answer: (
      <>
        <p>The answer is <strong>2 weighings</strong>, using a ternary split:</p>
        <p><strong>Weighing 1:</strong> Split into 3 groups of 3 (A, B, C). Weigh A vs B.</p>
        <ul>
          <li>If they <strong>balance</strong> → fake is in group C.</li>
          <li>If one side is <strong>heavier</strong> → fake is in that group.</li>
        </ul>
        <p><strong>Weighing 2:</strong> Take the 3 suspect coins. Weigh any 2 of them.</p>
        <ul>
          <li>If they <strong>balance</strong> → the 3rd coin is the fake.</li>
          <li>If one is <strong>heavier</strong> → that's your coin.</li>
        </ul>
        <p className={styles.answerHighlight}>∴ <strong>2 weighings</strong>. Each weighing has 3 outcomes, so 3² = 9 possibilities — exactly enough. This is ternary search in disguise.</p>
      </>
    ),
  },
  {
    id: 5,
    tag: "State Space Exploration",
    title: "The Three Light Switches",
    pitch:
      "You're outside a closed room with 3 switches. Inside are 3 bulbs, each connected to one switch. You can flip switches however you like, but you may only open the door once. How do you figure out which switch controls which bulb?",
    answer: (
      <>
        <p>Use <strong>heat as a hidden dimension</strong> of state:</p>
        <ol>
          <li>Turn <strong>Switch 1 ON</strong> for 10 minutes, then turn it <strong>OFF</strong>.</li>
          <li>Turn <strong>Switch 2 ON</strong> and leave it on.</li>
          <li>Leave <strong>Switch 3 OFF</strong>.</li>
          <li>Walk into the room.</li>
        </ol>
        <ul>
          <li>🟡 <strong>Bulb that is ON</strong> → Switch 2</li>
          <li>🌡️ <strong>Bulb that is OFF but hot</strong> → Switch 1</li>
          <li>❄️ <strong>Bulb that is OFF and cold</strong> → Switch 3</li>
        </ul>
        <p className={styles.answerHighlight}>∴ By encoding state across time (heat), you extract 3 bits of information from a single observation.</p>
      </>
    ),
  },
];

const PuzzleCard = ({ puzzle }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardTag}>{puzzle.tag}</div>
      <h2 className={styles.cardTitle}>{puzzle.id}. {puzzle.title}</h2>
      <p className={styles.pitch}>{puzzle.pitch}</p>

      {!revealed ? (
        <button className={styles.revealBtn} onClick={() => setRevealed(true)}>
          <span className={styles.revealIcon}>🔓</span> Show Answer
        </button>
      ) : (
        <div className={styles.answerBlock}>
          <div className={styles.answerLabel}>SOLUTION</div>
          <div className={styles.answerContent}>{puzzle.answer}</div>
        </div>
      )}
    </div>
  );
};

const PuzzlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>// CoDeC Recruitment Season 2025–26</p>
        <h1 className={styles.title}>The Puzzle Board</h1>
        <p className={styles.subtitle}>
          Classic problems that separate those who simulate from those who seek the invariant.
          Try each one before peeking at the answer.
        </p>
      </div>

      <div className={styles.grid}>
        {puzzles.map((p) => (
          <PuzzleCard key={p.id} puzzle={p} />
        ))}
      </div>

      <div className={styles.footer}>
        <p>Think you&apos;ve got what it takes?</p>
        <a href="/connect" className={styles.joinBtn}>Join CoDeC →</a>
      </div>
    </div>
  );
};

export default PuzzlePage;
