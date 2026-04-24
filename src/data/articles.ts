export type ArticleSection = { id: string; heading: string; body: string[] };

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  contentSections: ArticleSection[];
  relatedArticles: string[];
  aliases?: string[];
};

export const articles: Article[] = [
  {
    slug: "smc-basics-understanding-smart-money-concepts",
    title: "SMC Basics: Understanding Smart Money Concepts",
    subtitle: "A practical introduction to structure, liquidity, displacement, and refined reaction zones.",
    date: "2026-01-08",
    readingTime: "8 min read",
    category: "Smart Money",
    excerpt: "Learn how Smart Money Concepts organize price action without turning analysis into signal chasing.",
    contentSections: [
      { id: "foundation", heading: "The Foundation", body: ["Smart Money Concepts are best understood as a framework for asking better questions: where is liquidity, what structure is controlling price, and did displacement confirm a change in control?", "The framework does not remove uncertainty. It helps learners avoid random entries by requiring context before studying a reaction zone."] },
      { id: "sequence", heading: "A Clean SMC Sequence", body: ["A common study sequence begins with an external liquidity pool, then a sweep, then displacement, and finally a retracement into an order block or fair value gap.", "If one of those steps is missing, the chart may still move, but the educational model is weaker and should be treated with caution."] },
      { id: "discipline", heading: "Discipline Over Labels", body: ["The biggest mistake is labeling every candle as institutional activity. Good SMC analysis is selective, documented, and willing to say there is no clean setup."] },
    ],
    relatedArticles: ["ict-concepts-a-beginner-friendly-overview", "order-blocks-explained-with-market-context", "bos-vs-choach-what-is-the-difference"],
  },
  {
    slug: "ict-concepts-a-beginner-friendly-overview",
    aliases: ["ict-concepts-beginner-friendly-overview"],
    title: "ICT Concepts: A Beginner-Friendly Overview",
    subtitle: "How liquidity, session timing, FVGs, and premium-discount logic fit together.",
    date: "2026-01-14",
    readingTime: "7 min read",
    category: "ICT",
    excerpt: "A clear overview of ICT language for learners who want structure without mysticism.",
    contentSections: [
      { id: "language", heading: "The Language of ICT", body: ["ICT concepts use terms such as liquidity, fair value gap, kill zone, displacement, and optimal trade entry. Each term is useful only when it improves the analysis process.", "The goal is not to memorize names, but to understand how price moves from one area of interest to another."] },
      { id: "sessions", heading: "Why Sessions Matter", body: ["London and New York sessions often bring greater participation. That does not mean every session creates an opportunity, but it does make liquidity events easier to study."] },
      { id: "context", heading: "Context Comes First", body: ["Before marking FVGs or OTE zones, define the higher-timeframe draw on liquidity. Without context, lower-timeframe precision can become false confidence."] },
    ],
    relatedArticles: ["how-liquidity-sweeps-work", "how-to-use-fvg-without-overcomplicating-it", "smc-basics-understanding-smart-money-concepts"],
  },
  {
    slug: "how-liquidity-sweeps-work",
    title: "How Liquidity Sweeps Work",
    subtitle: "Why price often moves through obvious highs or lows before choosing direction.",
    date: "2026-01-21",
    readingTime: "6 min read",
    category: "Liquidity",
    excerpt: "Understand sweeps, reclaims, and why a wick alone is never enough confirmation.",
    contentSections: [
      { id: "where", heading: "Where Liquidity Builds", body: ["Liquidity commonly builds around equal highs, equal lows, range extremes, trend lines, and recent swing points. These levels are easy to see, so many decisions cluster around them."] },
      { id: "sweep", heading: "Sweep Versus Breakout", body: ["A sweep moves beyond a level and then rejects back inside. A breakout accepts beyond the level and continues. The difference is not the wick; it is the reaction after the level is crossed."] },
      { id: "confirmation", heading: "Confirmation Matters", body: ["After a sweep, learners should look for reclaim, displacement, or a structure shift. Without follow-through, the sweep may simply be continuation pressure."] },
    ],
    relatedArticles: ["bos-vs-choach-what-is-the-difference", "ict-concepts-a-beginner-friendly-overview", "wyckoff-accumulation-and-distribution-explained"],
  },
  {
    slug: "how-to-use-fvg-without-overcomplicating-it",
    title: "How to Use FVG Without Overcomplicating It",
    subtitle: "A clean way to study fair value gaps as retracement zones after displacement.",
    date: "2026-02-02",
    readingTime: "6 min read",
    category: "Entries",
    excerpt: "Fair value gaps are useful when they come after meaningful displacement and align with bias.",
    contentSections: [
      { id: "definition", heading: "Simple Definition", body: ["A fair value gap is a three-candle imbalance where the wick of candle one does not overlap the wick of candle three. It shows one-sided repricing."] },
      { id: "quality", heading: "What Makes an FVG Useful", body: ["Useful FVGs usually appear after liquidity has been taken or after a structure shift. Random gaps inside messy consolidation are lower quality."] },
      { id: "reaction", heading: "Wait for Reaction", body: ["The FVG is not a command to enter. It is a zone to observe. Strong rejection, absorption, or lower-timeframe structure can help determine whether the zone is respected."] },
    ],
    relatedArticles: ["order-blocks-explained-with-market-context", "ict-concepts-a-beginner-friendly-overview", "smc-basics-understanding-smart-money-concepts"],
  },
  {
    slug: "order-blocks-explained-with-market-context",
    title: "Order Blocks Explained With Market Context",
    subtitle: "How to separate meaningful order blocks from random candles.",
    date: "2026-02-10",
    readingTime: "7 min read",
    category: "Smart Money",
    excerpt: "Order blocks become useful only when displacement, structure, and liquidity support them.",
    contentSections: [
      { id: "meaning", heading: "What an Order Block Represents", body: ["An order block is commonly studied as the last opposing candle before a strong displacement. It is a reference area, not proof that institutions will defend the same price again."] },
      { id: "context", heading: "Context Filters", body: ["A stronger block breaks structure, follows a liquidity event, or aligns with higher-timeframe direction. A weak block appears in the middle of a range with no meaningful departure."] },
      { id: "refinement", heading: "Refinement", body: ["Learners can refine oversized blocks using candle bodies, wick extremes, or overlapping FVGs. The refinement must remain logical and not simply fitted to a desired entry."] },
    ],
    relatedArticles: ["how-to-use-fvg-without-overcomplicating-it", "smc-basics-understanding-smart-money-concepts", "how-liquidity-sweeps-work"],
  },
  {
    slug: "bos-vs-choach-what-is-the-difference",
    title: "BOS vs CHOACH: What Is the Difference?",
    subtitle: "A structure-focused comparison for cleaner trend and reversal analysis.",
    date: "2026-02-18",
    readingTime: "6 min read",
    category: "Market Structure",
    excerpt: "BOS often supports continuation, while CHOACH warns that character may be changing.",
    contentSections: [
      { id: "bos", heading: "BOS: Continuation", body: ["A break of structure usually occurs in the direction of the current trend. It confirms that the trend leg has extended through a meaningful swing."] },
      { id: "choach", heading: "CHOACH: Character Shift", body: ["A change of character violates the short-term rhythm that protected the previous move. It can be early evidence of reversal, but it needs confirmation."] },
      { id: "mistakes", heading: "Common Mistakes", body: ["Many learners mark every tiny internal break as major structure. The solution is to define which swings matter before price reaches them."] },
    ],
    relatedArticles: ["how-liquidity-sweeps-work", "smc-basics-understanding-smart-money-concepts", "order-blocks-explained-with-market-context"],
  },
  {
    slug: "wyckoff-accumulation-and-distribution-explained",
    title: "Wyckoff Accumulation and Distribution Explained",
    subtitle: "Reading ranges as campaigns of absorption, tests, and expansion.",
    date: "2026-03-01",
    readingTime: "8 min read",
    category: "Advanced Models",
    excerpt: "Wyckoff helps learners see ranges as structured behavior rather than random sideways movement.",
    contentSections: [
      { id: "range", heading: "The Range Is Information", body: ["A range can show absorption, exhaustion, or preparation. Wyckoff analysis asks whether supply or demand is being absorbed inside that range."] },
      { id: "accumulation", heading: "Accumulation", body: ["Accumulation often includes a spring or test below support, followed by signs of strength through resistance. The key is follow-through after the test."] },
      { id: "distribution", heading: "Distribution", body: ["Distribution often includes an upthrust above resistance and then weakness back into the range. Failed acceptance above the range is the warning sign."] },
    ],
    relatedArticles: ["how-liquidity-sweeps-work", "day-trading-vs-swing-trading-which-style-fits-you", "smc-basics-understanding-smart-money-concepts"],
  },
  {
    slug: "day-trading-vs-swing-trading-which-style-fits-you",
    title: "Day Trading vs Swing Trading: Which Style Fits You?",
    subtitle: "A realistic comparison of time commitment, decision pressure, and analysis style.",
    date: "2026-03-12",
    readingTime: "7 min read",
    category: "Trading Styles",
    excerpt: "Choose a learning style based on schedule, temperament, and ability to follow a written process.",
    contentSections: [
      { id: "day", heading: "Day Trading", body: ["Day trading focuses on intraday sessions and quick decisions. It can teach precision, but it also increases the risk of overtrading and emotional decision-making."] },
      { id: "swing", heading: "Swing Trading", body: ["Swing trading uses higher timeframes and allows more time for analysis. The trade-off is wider invalidation and exposure to overnight or multi-day events."] },
      { id: "choice", heading: "Choosing a Style", body: ["Beginners should choose the style they can document and repeat calmly. The best style is not the most exciting one; it is the one that supports consistent study habits."] },
    ],
    relatedArticles: ["wyckoff-accumulation-and-distribution-explained", "bos-vs-choach-what-is-the-difference", "ict-concepts-a-beginner-friendly-overview"],
  },
];

export const articleCategories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];

export const articleRoutes = articles.flatMap((article) => [article.slug, ...(article.aliases ?? [])]);

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug || article.aliases?.includes(slug));
}

export function getRelatedArticles(slugs: string[]) {
  return slugs.map(getArticle).filter(Boolean) as Article[];
}
