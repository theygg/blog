const n=JSON.parse('{"key":"v-3c314d77","path":"/pages/21b942/","title":"MySQL索引优化 二","lang":"zh-CN","frontmatter":{"title":"MySQL索引优化 二","date":"2022-08-31T01:56:40.000Z","permalink":"/pages/21b942/","author":{"name":"江"},"category":["MySQL"],"description":"分页查询优化 示例表： CREATE TABLE `employees` ( \\t`id` int(11) NOT NULL AUTO_INCREMENT, \\t`name` varchar(24) NOT NULL DEFAULT \'\' COMMENT \'姓名\', \\t`age` int(11) NOT NULL DEFAULT \'0\' COMMENT \'年龄\', \\t`position` varchar(20) NOT NULL DEFAULT \'\' COMMENT \'职位\', \\t`hire_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT \'入职时间\', \\tPRIMARY KEY (`id`), \\tKEY `idx_name_age_position` USING BTREE (`name`, `age`, `position`) ) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARSET = utf8 COMMENT \'员工记录表\';","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/21b942/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"MySQL索引优化 二"}],["meta",{"property":"og:description","content":"分页查询优化 示例表： CREATE TABLE `employees` ( \\t`id` int(11) NOT NULL AUTO_INCREMENT, \\t`name` varchar(24) NOT NULL DEFAULT \'\' COMMENT \'姓名\', \\t`age` int(11) NOT NULL DEFAULT \'0\' COMMENT \'年龄\', \\t`position` varchar(20) NOT NULL DEFAULT \'\' COMMENT \'职位\', \\t`hire_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT \'入职时间\', \\tPRIMARY KEY (`id`), \\tKEY `idx_name_age_position` USING BTREE (`name`, `age`, `position`) ) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARSET = utf8 COMMENT \'员工记录表\';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T18:24:48.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-08-31T01:56:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T18:24:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL索引优化 二\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-31T01:56:40.000Z\\",\\"dateModified\\":\\"2023-08-01T18:24:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"分页查询优化","slug":"分页查询优化","link":"#分页查询优化","children":[{"level":3,"title":"常见的分页场景优化技巧：","slug":"常见的分页场景优化技巧","link":"#常见的分页场景优化技巧","children":[]}]},{"level":2,"title":"Join关联查询优化","slug":"join关联查询优化","link":"#join关联查询优化","children":[{"level":3,"title":"1、 嵌套循环连接 Nested-Loop Join(NLJ) 算法","slug":"_1、-嵌套循环连接-nested-loop-join-nlj-算法","link":"#_1、-嵌套循环连接-nested-loop-join-nlj-算法","children":[]},{"level":3,"title":"2、 基于块的嵌套循环连接 Block Nested-Loop Join(BNL)算法","slug":"_2、-基于块的嵌套循环连接-block-nested-loop-join-bnl-算法","link":"#_2、-基于块的嵌套循环连接-block-nested-loop-join-bnl-算法","children":[]}]},{"level":2,"title":"in和exsits优化","slug":"in和exsits优化","link":"#in和exsits优化","children":[]},{"level":2,"title":"常见优化方法","slug":"常见优化方法","link":"#常见优化方法","children":[]}],"git":{"createdTime":1690914288000,"updatedTime":1690914288000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":43.24,"words":12972},"filePathRelative":"20.性能调优/00.MySQL/05.MySQL索引优化 二.md","localizedDate":"2022年8月31日","excerpt":"<h2> 分页查询优化</h2>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>示例表：\\n<span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>employees<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>id<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">AUTO_INCREMENT</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>name<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">24</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">\'\'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'姓名\'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>age<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">\'0\'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'年龄\'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>position<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">\'\'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'职位\'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>hire_time<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">timestamp</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">CURRENT_TIMESTAMP</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'入职时间\'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>id<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token keyword\\">KEY</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>idx_name_age_position<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">USING</span> <span class=\\"token keyword\\">BTREE</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>name<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>age<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>position<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">ENGINE</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">InnoDB</span> <span class=\\"token keyword\\">AUTO_INCREMENT</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span> <span class=\\"token keyword\\">CHARSET</span> <span class=\\"token operator\\">=</span> utf8 <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'员工记录表\'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};