# Learning Path - 05 JavaScript Memory and References

## Start Here
1. `../topics/01-memory-lifecycle-garbage-collection.md`
2. `../topics/02-primitive-vs-reference-behavior.md`
3. `../topics/03-mutation-vs-immutability.md`
4. `../topics/04-referential-equality.md`
5. `../topics/05-memory-leak-patterns-dan-cleanup.md`
6. `../topics/06-copy-strategies-shallow-vs-deep.md`
7. `../topics/07-closure-retention-dan-memory-traps.md`
8. `../topics/08-weakmap-weakset-dan-ephemeral-cache.md`
9. `../topics/09-weakref-dan-finalizationregistry-dasar.md`
10. `../topics/10-circular-references-dan-serialization-traps.md`
11. `../topics/11-memory-profiling-heap-snapshot-dan-retention-path.md`
12. `../topics/12-sharedarraybuffer-atomics-memory-model-dasar.md`

## Boundary ke Buku Lain
- Runtime sinkron dasar: `../../02-javascript-runtime-first-principles/topics/`
- Object/prototype mechanics: `../../04-javascript-object-model/topics/`

## Exit Criteria Buku 05
- Bisa membedakan copy value vs copy reference.
- Bisa mencegah mutasi tak sengaja pada object/array.
- Bisa menjelaskan kapan object eligible untuk GC berdasarkan reachability.
- Bisa mengidentifikasi leak pattern dasar dan strategi cleanup.
- Bisa memilih strategi copy shallow/deep sesuai kebutuhan.
- Bisa menjelaskan kapan WeakMap/WeakSet relevan untuk cache metadata sementara.
- Bisa menjelaskan batasan WeakRef/FinalizationRegistry tanpa menjadikannya mekanisme utama kontrol lifecycle.
- Bisa mengenali circular reference dan memilih strategi serialisasi yang aman.
- Bisa membaca sinyal dasar profiling memori (snapshot, allocation, retention path).

