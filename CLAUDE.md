# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

pearl의 개인 포트폴리오 웹사이트 (정적 HTML/CSS/JS, GitHub Pages 배포).
- 배포 URL: https://pearlzzi98.github.io/profile-web/
- Remote: https://github.com/pearlzzi98/profile-web.git

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

## docs/ 디렉토리

- `docs/PLAN.md` — 세션 플랜 기록 (gitignore 처리)
- `docs/MEMORY.md` — 프로젝트 메모리 (gitignore 처리)
- Git에 커밋되지 않음 (`.gitignore`에 `docs/` 포함)
