# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

pearl의 개인 포트폴리오 웹사이트 (정적 HTML/CSS/JS, GitHub Pages 배포).
- 배포 URL: https://pearlzzi98.github.io/profile-web/
- Remote: https://github.com/pearlzzi98/profile-web.git

## 세션 재개 (/resume)

사용자가 새 세션에서 이전 작업을 이어가려고 할 때 (예: "이어서 해줘", "resume", "/resume"),
**반드시 먼저** 다음 두 파일을 읽어 컨텍스트를 복원하라:

1. **`docs/MEMORY.md`** — 프로젝트 현재 상태, 기술 스택, 주의사항
2. **`docs/PLAN.md`** — 최근 플랜 및 완료/진행 상태

복원 후 사용자에게 다음을 요약하여 전달하라:
- 프로젝트 현재 상태
- 마지막으로 완료된 작업
- 진행 중이거나 미완료 항목 (있는 경우)
- 이어서 할 작업 확인

## /compact 실행 전 필수 작업

사용자가 `/compact`를 실행하면 **반드시 먼저** 다음 두 파일을 최신 상태로 업데이트하라:

1. **`docs/MEMORY.md`** — 프로젝트의 현재 상태 반영:
   - 변경된 파일, 설정, 기술 스택
   - 디자인 시스템 변경사항
   - 새로 추가된 서비스나 연동 정보
   - 주의사항 업데이트

2. **`docs/PLAN.md`** — 플랜의 완료/진행 상태 반영:
   - 완료된 작업은 Status를 `완료 (Completed)`로 표시
   - 새로운 플랜이 생성된 경우 추가
   - 미완료 항목이 있으면 명시

업데이트 후 `/compact`를 진행하라.

## Git 커밋 컨벤션

커밋 메시지는 **타입 prefix(영어) + 본문(한국어)** 형식을 따른다.

### 형식
```
<type>: <변경 내용 요약 (한국어)>
```

### 타입 목록
| 타입 | 용도 |
|------|------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 변경 (README, CLAUDE.md 등) |
| `style` | 코드 포맷, 디자인 변경 (기능 변경 없음) |
| `refactor` | 리팩토링 (기능/버그 변경 없음) |
| `chore` | 빌드, 설정 파일 변경 (.gitignore 등) |

### 예시
```
feat: 컨택 폼 유효성 검사 추가
fix: 네비게이션 스크롤 오프셋 수정
docs: README 배포 URL 업데이트
style: 히어로 섹션 간격 조정
chore: .gitignore에 docs/ 추가
```

### 규칙
- 제목 끝에 마침표 없음
- 현재형 동사 사용 ("추가했다" → "추가")
- 50자 이내로 작성

### 커밋/푸쉬 실행 트리거

| 트리거 | 동작 |
|--------|------|
| "commit", "커밋" | `git commit`만 수행 |
| "push", "푸쉬" | `git push`만 수행 |
| "commit&push", "커푸" | `git commit` + `git push` 순서대로 수행 |

**커밋 수행 시 절차:**
1. `git status`와 `git diff`로 변경 사항 확인
2. 위 컨벤션에 맞는 커밋 메시지 작성
3. `git add` 후 `git commit` 실행

---

## docs/ 디렉토리

- `docs/PLAN.md` — 세션 플랜 기록 (gitignore 처리)
- `docs/MEMORY.md` — 프로젝트 메모리 (gitignore 처리)
- Git에 커밋되지 않음 (`.gitignore`에 `docs/` 포함)
