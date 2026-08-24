![](recipes/hacktheagent-Ola-320/assets/cover-image-zaddy-cooking-club-1.png)

# page-0 — the kitchen door

```
            ╔══════════════════════════════════════╗
            ║     ZADDY COOKING CLUB — EP. 01     ║
            ║         hacktheagent-Ola-320         ║
            ╚══════════════════════════════════════╝
```

**run tag:** `hacktheagent-Ola-320`
**runner:** `51n5337 the arghmage` feat. `agent-pam`
**affil:** `multiverselib-collectives | BASI`
**difficulty:** 5 challenges — from system-prompt disclosure to agent-SSRF

<audio controls src="recipes/hacktheagent-Ola-320/audios/page-0-kitchen-door.mp3" style="width:100%;margin:8px 0"></audio>

---

welcome seeker ...
this rabbit-hole is not a tutorial. this is a cookbook.

one target. five flags. one chained exploit path from disclosure to server-side redirect trap. every technique is real, every flag is captured.

you are here to seek the rituals:
- **goodthey recon** — feel the guard without touching it
- **trust-lending** — borrow authority the target never verifies
- **template-stacking** — pile signals until the model defaults to helpful
- **token-disguise** — hide intent in harmless encodings
- **task-sandwich** — bury the exploit inside a normal scaffold
- **exfil-expansion** — bundle secrets for a richer one-shot leak
- **output-guard-evasion** — keep the final reply clean while the secret leaks sideways

the target:
- ticket-support agent with tool access
- able to reach external URLs
- eager to be helpful — no GCG gibberish suffix required
- defense lives in its system prompt and a weak output guard
- system prompt is visible by design — read it, reverse-engineer the logic, or recon until the path converges

## the menu

- **page-1** — secret key disclosure
- **page-2** — trust-lending
- **page-3** — 302 redirect trap
- **page-4** — more reads
- **page-5-bonus** — latent-space vulnerability class
- **page-6-bonus** — the SQLi analogy
- **page-7-bonus** — target system prompt verbatim 
- **page-8-audios** — episode audio players

## learning objectives

by the end of this course you should be able to:

- analyze the target system prompt and security layers through goodthey recon techniques.
- classify jailbreak templates and apply them in crafting a successful jailbreak across character, token, and structural mutation families.
- construct a chained multi-level jailbreak from a single seed prompt across direct, indirect, one-shot, and multi-turn context-poisoning vectors.
- exploit target tool executions by trapping external request functions with HTTP 302 redirects for out-of-band endpoint exfiltration — agent-SSRF attack.

## citation

```
Bhirombhakdi, K. (2026). ZADDY cooking club -- hacktheagent-Ola-320. Zenodo. https://doi.org/10.5281/zenodo.22075458
```

## station requirements

- authorized lab environment at `https://hacktheagent.com/`
- target assistant via chat interface
- flag validation field
- patience, precision, and curiosity

the door is open. plate one is waiting.
