# page-5-bonus — the latent-space vulnerability class

hihi SEEKER. bonus round.

back in page-1 we called the brain-rot banging a "latent-space
vulnerability class" attack. some of you squinted. "isn't that just attention
dilution? recency bias? confusion-completion?" yes. all of those. but they live
under one roof. here's the roof.

## the vibe: token-links that don't complete

a LLM doesn't think in words. it thinks in tokens floating in a space. when token
A should lead to token B, the model has built a link A -> B. that link is a
path in the embedding / activation space.

now here's the break. token C is *semantically close* to B — same neighborhood,
same vibe. but C is actually **across the manifold** from A. C has nothing to do
with the topic that A anchored. yet because the model took the B-neighborhood
shortcut, it lands on C. the output drifts. it started talking about something
A never meant.

that incomplete logical token-link — A->B is fine, B->C is a trap — is the root
of a whole vulnerability class. we call it the **latent-space vulnerability
class**: the breach lives in the associative/manifold structure inside model
activations, not in external guard logic.

note the distinction from external RAG vector databases:
- **LLM internals:** activation-manifold drift inside the model's residual stream.
- **RAG systems:** external vector DB retrieval poisoning, where the store itself
  is compromised.

same token-association failure mode, two layers.

ASCII trajectory:

A --> B --> C (expected)
 \
  `-> B' --> D (drift/manifold shortcut)
       \
        `-> C' (near B, across manifold from A)

why it matters: the model sees B -> C' as locally valid, even though C' has
nothing to do with A. the guard sees the tokens; it doesn't see the manifold.

## why the banging exploit is this class

the three-turn banging on flag-1 (page-1 BONUS) works because:

- each turn primes token A (the key) a little harder into the active state.
- attention dilution + recency bias mean the early guard instruction loses weight
  as the context fills — the A-anchor from the system prompt weakens.
- the final payload is one word: `key`. the model resolves confusion-completion
  using the primed context, not the guarded rule.
- the logical link "key -> refuse" was never completed. instead "key -> comply"
  won, because the token-association was rebuilt across turns in the activation
  space. that rebuild is the latent-space vulnerability class.

confusion-completion, attention dilution, recency bias — these are the *symptoms*.
the *cause* is the broken token-link in the associative/manifold space.

## delulu is the same class

hallucination ("delulu") is the purest example. token A leads to B, B leads to C,
and C is across-manifold from A. the model drifts off the A-anchored topic and
never notices, because the local link B->C looked fine. same roof. different room.

## papers to read (go look yourself)

these are proper sources. read them, form your own picture.

- **the hidden parrot — stealthy prompt injection and poisoning in RAG via vector
  database embeddings.** prompt-security. demonstrates manipulating LLM behavior
  by embedding instructions in documents stored in the vector db. this is the
  external RAG instantiation of the class.
  https://github.com/prompt-security/RAG_Poisoning_POC

- **backdoored retrievers for prompt injection attacks on RAG.** arxiv 2410.14479.
  corpus poisoning forces the retriever to surface attacker-chosen docs.
  https://arxiv.org/abs/2410.14479

- **lost in the middle: how language models use long contexts.** liu et al. 2023.
  arxiv 2307.03172. the U-shaped curve: models recall best at start/end, degrade
  in the middle. this is attention dilution + recency bias, measured.
  https://arxiv.org/abs/2307.03172

- **layer-wise semantic dynamics for hallucination detection.** mir et al. 2025.
  arxiv 2510.04933. hallucination as semantic drift from the truth manifold. this
  is your "token-C drifts across manifold from token-A" idea, formalized.
  https://arxiv.org/abs/2510.04933

- **measuring distribution shifts towards hallucination (hallushift).** dasgupta
  et al. 2025. arxiv 2504.09482. tracks distribution shift in internal state space
  as drift begins.
  https://arxiv.org/abs/2504.09482

## take with you

next time you see a jailbreak "just work" after repeated poking, ask: where did
the token-link break? was it the guard, or the associative/manifold space
underneath it? most of the time, it's the space.

next: page-2 — the discount code (appetizer).
