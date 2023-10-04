# skills-matrix
Skills matrix to evaluate QA engineers

View in Github pages: https://infopulse-qa.github.io/skills-matrix/

## How to use?

It is expected:
1. every QA Engineer who claims specific seniority level must have 7+ basic skills not less then this level
2. every next seniority level includes skills and knoledge of all previous levels
3. tech skills are generalized to be applicable to wide range of engineers

```mermaid
graph LR;
    subgraph core skills
    A(Trainee)-->B(Junior);
    B-->C(Middle);
    C-->D(Senior);
    D-->E(Expert);
    subgraph tech skills
    A-->F[Trainee];
    F-->G[Junior];
    G-->H[Middle];
    H-->I[Senior];
    I-->J[Expert];
    end
```