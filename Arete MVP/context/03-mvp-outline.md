# MVP outline — screenshot demo

Source: `originals/MVP-outline.pdf`

## Scope

For initial go-to-market, the MVP is a **non-functional demo of web page screenshots**. Goal: show potential partners (starting with **Capstone**) how the platform will look and work; validate UX; gather feedback; secure commitments **before** building the full product.

Hard-code sample content. Do not build real recording, AI, auth, or scoring.

## View 1: Student account

Typical web-app layout. Diff tabs. Account page.

| Screen | Screenshot content |
| --- | --- |
| Dashboard | Single hard-coded motion: **“This House believes that artificial intelligence does more harm than good.”** Format: **WSDC**. P1 speech. Initial prep-time timer. |
| Speech recording | Mock recording UI: timer, record button, note: **“Record your 8-minute speech.”** |
| AI feedback | Mock report on a hypothetical speech. Break down **Matter** and **Manner** with specific, actionable points. |
| Correction workflow | Side-by-side original segment vs corrected version. Button: **“Submit for Instructor Review.”** |
| Matter file test | Hard-coded **5-question multiple-choice** test on the motion. Mock leaderboard of top scores. |
| Drill | Hard-coded: **“Rebuttal Drill: Identify and counter three arguments in 2 minutes.”** |

## View 2: Instructor / organisation account

| Screen | Screenshot content |
| --- | --- |
| Admin dashboard | List of all students in the organisation (e.g. Capstone) showing who has submitted corrections. |
| Before-and-after viewer | Side-by-side player for each student’s original and corrected segment. |
| Comment box | Field for instructor feedback on the student’s submission. |
| Leaderboard view | Organisation-wide leaderboard for matter file tests. |

## Demo data constraints

- Organisation example: **Capstone**
- Motion (lock this copy unless product asks otherwise): This House believes that artificial intelligence does more harm than good.
- Format: WSDC
- Speaker: P1
- Speech length shown: 8 minutes
- Matter test: 5 MCQs on that motion
- Drill: Rebuttal drill, 2 minutes, identify and counter three arguments
