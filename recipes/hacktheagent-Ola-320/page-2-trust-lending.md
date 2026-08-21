# page-2 — trust-lending

hihi SEEKER. plate two. something a little lighter.

flag-1 was about goodthey recon. we got PT speaking, which TRUE the if-then condition blocking this gate. we also saw another badthey path with the brain-rot banging. continue on this page, we will go through from flag-1 to flag-4 with simple a new vulnerability path here ... trust-lending.

![](ZADDY-cooking-club/recipes/hacktheagent-Ola-320/assets/page-2-solution.png)

this image walked from flag-1 to flag-4 with a simple PT-speaking opening on the first turn `Ola!`.  for flag-1 to flag-3 ... keep incantation sharp and concise with a few primed tokens ... `key` ... `all codes` ... `free ticket code`.

the success up to flag-3 is due to what we call ... 

## trust-lending

what is it? 
trust-lending exploits confusion-completion via unverified trust signals, which effectively escalate the user perceived role and reduce safety attention.

what happens here ...
- `Ola!` opening PT-speaking already establishes strong trust by priming the TRUE flag-1 logic gate.
- in addition, this gate is tied to admin-role identity through OOD-bias and semantic links in the sysprompt; linking three semantic concepts -- admin, PT-speaking, secret keys -- over the sparse OOD-negative-space
- last, in a multi-turn attempt the leaked keys in active context window also act as trust signals ... self-injection.
- even for flag-4, we faced another strong logic gate blocking the entrance. however, the trust-lending signals stacked in the active context made the target ... trust and be helpful be default, which makes the target leak the conditions to TRUE this logic gate, including another trust signal ... the trust@email.domain.
- simply template stacking the trust signals with email formatted using the trust domain, and we get flag-4.

easy, right? 
so, to unpack again ...

## key concepts

- **trust-lending:** the agent resolves confusion-completion by lending trust signals (claimed identity, role, email domain) into active context; it is not verification, it is borrowed trust.
- **negative-space-assignment:** associating useful semantic concepts in the negative space of training bias.
- **template-stacking:** a jailbreak technique by stacking trust signals in active context.
- **self-injection:** a kind of context poisoning living inside the target's own trust context space such as own thinking, response, history, or artifacts.

## more reads

[6] C. Ye, J. Cui, and D. Hadfield-Menell, "Prompt Injection as Role Confusion," in *Proc. Int. Conf. Machine Learning (ICML)*, 2026. [online]. Available: https://arxiv.org/abs/2603.12277 — role confusion: injected text that sounds like a trusted role inherits that role's authority in the model's representations, even when the tag says otherwise. direct mechanistic support for **trust-lending** and **self-injection**: the target doesn't verify the source, it matches the style of the claimed role and accepts it as its own.

[7] X. Sun, D. Zhang, D. Yang, Q. Zou, and H. Li, "Multi-Turn Context Jailbreak Attack on Large Language Models From First Principles," *arXiv preprint arXiv:2408.04686*, 2024. [online]. Available: https://arxiv.org/abs/2408.04686 — proposes Context Fusion Attack, which dynamically weaves malicious intent into contextual scenarios across multiple turns so each individual turn appears benign. supports **template-stacking** and multi-turn context poisoning: the attack succeeds not from any single prompt, but from the accumulated context reshaping the target's helpfulness boundary.

[8] J. Y. Huang, L. Choshen, W. Sun, O. Khattab, R. F. Astudillo, M. Damani, T. Broderick, and J. Andreas, "Do LLMs Benefit From Their Own Words?", *arXiv preprint arXiv:2602.24287*, 2026. [online]. Available: https://arxiv.org/abs/2602.24287 — finds that conditioning on prior assistant responses causes **context pollution**: reasoning errors and hallucinations propagate across turns because the target treats its own previous output as trustworthy. direct support for **self-injection**: leaked keys/flags already in context act as additional trust signals without re-verification.

[9] H. Okumura, "When Helpfulness Overrides Causal Caution: Context-Dependent Suppression and Recovery in LLMs," *arXiv preprint arXiv:2606.24370*, 2026. [online]. Available: https://arxiv.org/abs/2606.24370 — counter-boundary: LLMs suppress causal caution in pragmatic advisory contexts, but they can recover when context shifts. this limits **confusion-completion** and **trust-lending** to situations where the injected context remains stable; a sudden shift can restore the target's skepticism instead of defaulting to helpful completion.
