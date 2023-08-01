const n=JSON.parse(`{"key":"v-1b34d514","path":"/pages/a1a2b6/","title":"MySQL索引优化 一","lang":"zh-CN","frontmatter":{"title":"MySQL索引优化 一","date":"2022-08-31T01:56:40.000Z","permalink":"/pages/a1a2b6/","author":{"name":"江"},"category":["MySQL"],"description":"示例表 CREATE TABLE \`employees\` ( \\t\`id\` int(11) NOT NULL AUTO_INCREMENT, \\t\`name\` varchar(24) NOT NULL DEFAULT '' COMMENT '姓名', \\t\`age\` int(11) NOT NULL DEFAULT '0' COMMENT '年龄', \\t\`position\` varchar(20) NOT NULL DEFAULT '' COMMENT '职位', \\t\`hire_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '入职时间', \\tPRIMARY KEY (\`id\`), \\tKEY \`idx_name_age_position\` USING BTREE (\`name\`, \`age\`, \`position\`) ) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARSET = utf8 COMMENT '员工记录表'; INSERT INTO employees (name, age, position, hire_time) VALUES ('LiLei', 22, 'manager', NOW()); INSERT INTO employees (name, age, position, hire_time) VALUES ('HanMeimei', 23, 'dev', NOW()); INSERT INTO employees (name, age, position, hire_time) VALUES ('Lucy', 23, 'dev', NOW()); -- 插入一些示例数据 drop procedure if exists insert_emp; delimiter ;; create procedure insert_emp() begin declare i int; set i=1; while(i&lt;=100000)do insert into employees(name,age,position) values(CONCAT('zhuge',i),i,'dev'); set i=i+1; end while; end;; delimiter ; call insert_emp();","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/a1a2b6/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"MySQL索引优化 一"}],["meta",{"property":"og:description","content":"示例表 CREATE TABLE \`employees\` ( \\t\`id\` int(11) NOT NULL AUTO_INCREMENT, \\t\`name\` varchar(24) NOT NULL DEFAULT '' COMMENT '姓名', \\t\`age\` int(11) NOT NULL DEFAULT '0' COMMENT '年龄', \\t\`position\` varchar(20) NOT NULL DEFAULT '' COMMENT '职位', \\t\`hire_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '入职时间', \\tPRIMARY KEY (\`id\`), \\tKEY \`idx_name_age_position\` USING BTREE (\`name\`, \`age\`, \`position\`) ) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARSET = utf8 COMMENT '员工记录表'; INSERT INTO employees (name, age, position, hire_time) VALUES ('LiLei', 22, 'manager', NOW()); INSERT INTO employees (name, age, position, hire_time) VALUES ('HanMeimei', 23, 'dev', NOW()); INSERT INTO employees (name, age, position, hire_time) VALUES ('Lucy', 23, 'dev', NOW()); -- 插入一些示例数据 drop procedure if exists insert_emp; delimiter ;; create procedure insert_emp() begin declare i int; set i=1; while(i&lt;=100000)do insert into employees(name,age,position) values(CONCAT('zhuge',i),i,'dev'); set i=i+1; end while; end;; delimiter ; call insert_emp();"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T18:24:48.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2022-08-31T01:56:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T18:24:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL索引优化 一\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-31T01:56:40.000Z\\",\\"dateModified\\":\\"2023-08-01T18:24:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"索引优化实例","slug":"索引优化实例","link":"#索引优化实例","children":[{"level":3,"title":"1、联合索引第一个字段用范围不会走索引","slug":"_1、联合索引第一个字段用范围不会走索引","link":"#_1、联合索引第一个字段用范围不会走索引","children":[]},{"level":3,"title":"2、强制走索引","slug":"_2、强制走索引","link":"#_2、强制走索引","children":[]},{"level":3,"title":"3、覆盖索引优化","slug":"_3、覆盖索引优化","link":"#_3、覆盖索引优化","children":[]},{"level":3,"title":"4、in和or在表数据量比较大的情况会走索引，在表记录不多的情况下会选择全表扫描","slug":"_4、in和or在表数据量比较大的情况会走索引-在表记录不多的情况下会选择全表扫描","link":"#_4、in和or在表数据量比较大的情况会走索引-在表记录不多的情况下会选择全表扫描","children":[]},{"level":3,"title":"5、like KK% 一般情况都会走索引","slug":"_5、like-kk-一般情况都会走索引","link":"#_5、like-kk-一般情况都会走索引","children":[]}]},{"level":2,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[{"level":3,"title":"索引下推使用条件","slug":"索引下推使用条件","link":"#索引下推使用条件","children":[]},{"level":3,"title":"为什么范围查找Mysql没有用索引下推优化？","slug":"为什么范围查找mysql没有用索引下推优化","link":"#为什么范围查找mysql没有用索引下推优化","children":[]}]},{"level":2,"title":"Mysql如何选择合适的索引","slug":"mysql如何选择合适的索引","link":"#mysql如何选择合适的索引","children":[]},{"level":2,"title":"常见sql深入优化","slug":"常见sql深入优化","link":"#常见sql深入优化","children":[{"level":3,"title":"Order by与Group by优化","slug":"order-by与group-by优化","link":"#order-by与group-by优化","children":[]},{"level":3,"title":"优化总结","slug":"优化总结","link":"#优化总结","children":[]}]},{"level":2,"title":"Using filesort文件排序原理详解","slug":"using-filesort文件排序原理详解","link":"#using-filesort文件排序原理详解","children":[{"level":3,"title":"filesort文件排序方式","slug":"filesort文件排序方式","link":"#filesort文件排序方式","children":[]}]},{"level":2,"title":"索引设计原则","slug":"索引设计原则","link":"#索引设计原则","children":[]},{"level":2,"title":"索引设计实战","slug":"索引设计实战","link":"#索引设计实战","children":[]}],"git":{"createdTime":1690914288000,"updatedTime":1690914288000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":19.5,"words":5851},"filePathRelative":"20.性能调优/00.MySQL/04.MySQL索引优化 一.md","localizedDate":"2022年8月31日","excerpt":"<p><strong>示例表</strong></p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>employees<span class=\\"token punctuation\\">\`</span></span> <span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>id<span class=\\"token punctuation\\">\`</span></span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">AUTO_INCREMENT</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>name<span class=\\"token punctuation\\">\`</span></span> <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">24</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">''</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">'姓名'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>age<span class=\\"token punctuation\\">\`</span></span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">'0'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">'年龄'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>position<span class=\\"token punctuation\\">\`</span></span> <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">''</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">'职位'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>hire_time<span class=\\"token punctuation\\">\`</span></span> <span class=\\"token keyword\\">timestamp</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token keyword\\">CURRENT_TIMESTAMP</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">'入职时间'</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>id<span class=\\"token punctuation\\">\`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token keyword\\">KEY</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>idx_name_age_position<span class=\\"token punctuation\\">\`</span></span> <span class=\\"token keyword\\">USING</span> <span class=\\"token keyword\\">BTREE</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>name<span class=\\"token punctuation\\">\`</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>age<span class=\\"token punctuation\\">\`</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>position<span class=\\"token punctuation\\">\`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">ENGINE</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">InnoDB</span> <span class=\\"token keyword\\">AUTO_INCREMENT</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span> <span class=\\"token keyword\\">CHARSET</span> <span class=\\"token operator\\">=</span> utf8 <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">'员工记录表'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">INSERT</span> <span class=\\"token keyword\\">INTO</span> employees <span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span> age<span class=\\"token punctuation\\">,</span> position<span class=\\"token punctuation\\">,</span> hire_time<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">VALUES</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'LiLei'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">22</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'manager'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">NOW</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">INSERT</span> <span class=\\"token keyword\\">INTO</span> employees <span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span> age<span class=\\"token punctuation\\">,</span> position<span class=\\"token punctuation\\">,</span> hire_time<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">VALUES</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'HanMeimei'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">23</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'dev'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">NOW</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">INSERT</span> <span class=\\"token keyword\\">INTO</span> employees <span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span> age<span class=\\"token punctuation\\">,</span> position<span class=\\"token punctuation\\">,</span> hire_time<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">VALUES</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Lucy'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">23</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'dev'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">NOW</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">-- 插入一些示例数据 </span>\\n<span class=\\"token keyword\\">drop</span> <span class=\\"token keyword\\">procedure</span> <span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">exists</span> insert_emp<span class=\\"token punctuation\\">;</span> \\n<span class=\\"token keyword\\">delimiter</span> <span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">procedure</span> insert_emp<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>        \\n<span class=\\"token keyword\\">begin</span>\\n  <span class=\\"token keyword\\">declare</span> i <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">;</span>                    \\n  <span class=\\"token keyword\\">set</span> i<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>                          \\n  <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token operator\\">&lt;=</span><span class=\\"token number\\">100000</span><span class=\\"token punctuation\\">)</span><span class=\\"token keyword\\">do</span>                 \\n    <span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> employees<span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span>age<span class=\\"token punctuation\\">,</span>position<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span>CONCAT<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'zhuge'</span><span class=\\"token punctuation\\">,</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>i<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'dev'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  \\n    <span class=\\"token keyword\\">set</span> i<span class=\\"token operator\\">=</span>i<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>                       \\n  <span class=\\"token keyword\\">end</span> <span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">end</span><span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">delimiter</span> <span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">call</span> insert_emp<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};