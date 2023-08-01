const e=JSON.parse('{"key":"v-aec09700","path":"/pages/12194314/","title":"MySQL8.0新特性","lang":"zh-CN","frontmatter":{"title":"MySQL8.0新特性","date":"2023-07-12T19:43:14.000Z","permalink":"/pages/12194314/","author":{"name":"江"},"category":["MySQL"],"description":"建议使用8.0.17及之后的版本，更新的内容比较多。 新增降序索引 MySQL在语法上很早就已经支持降序索引，但实际上创建的仍然是升序索引，如下MySQL 5.7 所示，c2字段降序，但是从show create table看c2仍然是升序。8.0可以看到，c2字段降序。只有Innodb存储引擎支持降序索引。 # ====MySQL 5.7演示==== mysql&gt; create table t1(c1 int,c2 int,index idx_c1_c2(c1,c2 desc)); Query OK, 0 rows affected (0.04 sec) mysql&gt; insert into t1 (c1,c2) values(1, 10),(2,50),(3,50),(4,100),(5,80); Query OK, 5 rows affected (0.02 sec) mysql&gt; show create table t1\\\\G *************************** 1. row *************************** Table: t1 Create Table: CREATE TABLE `t1` ( `c1` int(11) DEFAULT NULL, `c2` int(11) DEFAULT NULL, KEY `idx_c1_c2` (`c1`,`c2`) --注意这里，c2字段是升序 ) ENGINE=InnoDB DEFAULT CHARSET=latin1 1 row in set (0.00 sec) mysql&gt; explain select * from t1 order by c1,c2 desc; --5.7也会使用索引，但是Extra字段里有filesort文件排序 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index; Using filesort | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ 1 row in set, 1 warning (0.01 sec) # ====MySQL 8.0演示==== mysql&gt; create table t1(c1 int,c2 int,index idx_c1_c2(c1,c2 desc)); Query OK, 0 rows affected (0.02 sec) mysql&gt; insert into t1 (c1,c2) values(1, 10),(2,50),(3,50),(4,100),(5,80); Query OK, 5 rows affected (0.02 sec) mysql&gt; show create table t1\\\\G *************************** 1. row *************************** Table: t1 Create Table: CREATE TABLE `t1` ( `c1` int DEFAULT NULL, `c2` int DEFAULT NULL, KEY `idx_c1_c2` (`c1`,`c2` DESC) --注意这里的区别，降序索引生效了 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 1 row in set (0.00 sec) mysql&gt; explain select * from t1 order by c1,c2 desc; --Extra字段里没有filesort文件排序，充分利用了降序索引 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+ 1 row in set, 1 warning (0.00 sec) mysql&gt; explain select * from t1 order by c1 desc,c2; --Extra字段里有Backward index scan，意思是反向扫描索引; +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Backward index scan; Using index | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+ 1 row in set, 1 warning (0.00 sec) mysql&gt; explain select * from t1 order by c1 desc,c2 desc; --Extra字段里有filesort文件排序，排序必须按照每个字段定义的排序或按相反顺序才能充分利用索引 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index; Using filesort | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ 1 row in set, 1 warning (0.00 sec) mysql&gt; explain select * from t1 order by c1,c2; --Extra字段里有filesort文件排序，排序必须按照每个字段定义的排序或按相反顺序才能充分利用索引 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index; Using filesort | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ 1 row in set, 1 warning (0.00 sec)","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/pages/12194314/"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"MySQL8.0新特性"}],["meta",{"property":"og:description","content":"建议使用8.0.17及之后的版本，更新的内容比较多。 新增降序索引 MySQL在语法上很早就已经支持降序索引，但实际上创建的仍然是升序索引，如下MySQL 5.7 所示，c2字段降序，但是从show create table看c2仍然是升序。8.0可以看到，c2字段降序。只有Innodb存储引擎支持降序索引。 # ====MySQL 5.7演示==== mysql&gt; create table t1(c1 int,c2 int,index idx_c1_c2(c1,c2 desc)); Query OK, 0 rows affected (0.04 sec) mysql&gt; insert into t1 (c1,c2) values(1, 10),(2,50),(3,50),(4,100),(5,80); Query OK, 5 rows affected (0.02 sec) mysql&gt; show create table t1\\\\G *************************** 1. row *************************** Table: t1 Create Table: CREATE TABLE `t1` ( `c1` int(11) DEFAULT NULL, `c2` int(11) DEFAULT NULL, KEY `idx_c1_c2` (`c1`,`c2`) --注意这里，c2字段是升序 ) ENGINE=InnoDB DEFAULT CHARSET=latin1 1 row in set (0.00 sec) mysql&gt; explain select * from t1 order by c1,c2 desc; --5.7也会使用索引，但是Extra字段里有filesort文件排序 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index; Using filesort | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ 1 row in set, 1 warning (0.01 sec) # ====MySQL 8.0演示==== mysql&gt; create table t1(c1 int,c2 int,index idx_c1_c2(c1,c2 desc)); Query OK, 0 rows affected (0.02 sec) mysql&gt; insert into t1 (c1,c2) values(1, 10),(2,50),(3,50),(4,100),(5,80); Query OK, 5 rows affected (0.02 sec) mysql&gt; show create table t1\\\\G *************************** 1. row *************************** Table: t1 Create Table: CREATE TABLE `t1` ( `c1` int DEFAULT NULL, `c2` int DEFAULT NULL, KEY `idx_c1_c2` (`c1`,`c2` DESC) --注意这里的区别，降序索引生效了 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 1 row in set (0.00 sec) mysql&gt; explain select * from t1 order by c1,c2 desc; --Extra字段里没有filesort文件排序，充分利用了降序索引 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+ 1 row in set, 1 warning (0.00 sec) mysql&gt; explain select * from t1 order by c1 desc,c2; --Extra字段里有Backward index scan，意思是反向扫描索引; +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Backward index scan; Using index | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+ 1 row in set, 1 warning (0.00 sec) mysql&gt; explain select * from t1 order by c1 desc,c2 desc; --Extra字段里有filesort文件排序，排序必须按照每个字段定义的排序或按相反顺序才能充分利用索引 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index; Using filesort | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ 1 row in set, 1 warning (0.00 sec) mysql&gt; explain select * from t1 order by c1,c2; --Extra字段里有filesort文件排序，排序必须按照每个字段定义的排序或按相反顺序才能充分利用索引 +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | id | select_type | table | partitions | type | possible_keys | key | key_len | ref | rows | filtered | Extra | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ | 1 | SIMPLE | t1 | NULL | index | NULL | idx_c1_c2 | 10 | NULL | 1 | 100.00 | Using index; Using filesort | +----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+ 1 row in set, 1 warning (0.00 sec)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T18:24:48.000Z"}],["meta",{"property":"article:author","content":"江"}],["meta",{"property":"article:published_time","content":"2023-07-12T19:43:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T18:24:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL8.0新特性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-12T19:43:14.000Z\\",\\"dateModified\\":\\"2023-08-01T18:24:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"江\\"}]}"]]},"headers":[{"level":2,"title":"新增降序索引","slug":"新增降序索引","link":"#新增降序索引","children":[]},{"level":2,"title":"group by 不再隐式排序","slug":"group-by-不再隐式排序","link":"#group-by-不再隐式排序","children":[]},{"level":2,"title":"增加隐藏索引","slug":"增加隐藏索引","link":"#增加隐藏索引","children":[]},{"level":2,"title":"新增函数索引","slug":"新增函数索引","link":"#新增函数索引","children":[]},{"level":2,"title":"innodb存储引擎select for update跳过锁等待","slug":"innodb存储引擎select-for-update跳过锁等待","link":"#innodb存储引擎select-for-update跳过锁等待","children":[]},{"level":2,"title":"新增innodb_dedicated_server自适应参数","slug":"新增innodb-dedicated-server自适应参数","link":"#新增innodb-dedicated-server自适应参数","children":[]},{"level":2,"title":"死锁检查控制","slug":"死锁检查控制","link":"#死锁检查控制","children":[]},{"level":2,"title":"undo文件不再使用系统表空间","slug":"undo文件不再使用系统表空间","link":"#undo文件不再使用系统表空间","children":[]},{"level":2,"title":"binlog日志过期时间精确到秒","slug":"binlog日志过期时间精确到秒","link":"#binlog日志过期时间精确到秒","children":[]},{"level":2,"title":"窗口函数(Window Functions)：也称分析函数","slug":"窗口函数-window-functions-也称分析函数","link":"#窗口函数-window-functions-也称分析函数","children":[]},{"level":2,"title":"默认字符集由latin1变为utf8mb4","slug":"默认字符集由latin1变为utf8mb4","link":"#默认字符集由latin1变为utf8mb4","children":[]},{"level":2,"title":"MyISAM系统表全部换成InnoDB表","slug":"myisam系统表全部换成innodb表","link":"#myisam系统表全部换成innodb表","children":[]},{"level":2,"title":"元数据存储变动","slug":"元数据存储变动","link":"#元数据存储变动","children":[]},{"level":2,"title":"自增变量持久化","slug":"自增变量持久化","link":"#自增变量持久化","children":[]},{"level":2,"title":"DDL原子化","slug":"ddl原子化","link":"#ddl原子化","children":[]}],"git":{"createdTime":1690914288000,"updatedTime":1690914288000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":15.77,"words":4730},"filePathRelative":"20.性能调优/00.MySQL/10.MySQL 8.0新特性.md","localizedDate":"2023年7月13日","excerpt":"<p>建议使用8.0.17及之后的版本，更新的内容比较多。</p>\\n<h2> 新增降序索引</h2>\\n<p>MySQL在语法上很早就已经支持降序索引，但实际上创建的仍然是升序索引，如下MySQL 5.7 所示，c2字段降序，但是从show create table看c2仍然是升序。8.0可以看到，c2字段降序。只有Innodb存储引擎支持降序索引。</p>\\n<div class=\\"language-mysql line-numbers-mode\\" data-ext=\\"mysql\\"><pre class=\\"language-mysql\\"><code># ====MySQL 5.7演示====\\nmysql&gt; create table t1(c1 int,c2 int,index idx_c1_c2(c1,c2 desc));\\nQuery OK, 0 rows affected (0.04 sec)\\n\\nmysql&gt; insert into t1 (c1,c2) values(1, 10),(2,50),(3,50),(4,100),(5,80);\\nQuery OK, 5 rows affected (0.02 sec)\\n\\nmysql&gt; show create table t1\\\\G\\n*************************** 1. row ***************************\\n       Table: t1\\nCreate Table: CREATE TABLE `t1` (\\n  `c1` int(11) DEFAULT NULL,\\n  `c2` int(11) DEFAULT NULL,\\n  KEY `idx_c1_c2` (`c1`,`c2`)    --注意这里，c2字段是升序\\n) ENGINE=InnoDB DEFAULT CHARSET=latin1\\n1 row in set (0.00 sec)\\n\\nmysql&gt; explain select * from t1 order by c1,c2 desc;  --5.7也会使用索引，但是Extra字段里有filesort文件排序\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n| id | select_type | table | partitions | type  | possible_keys | key       | key_len | ref  | rows | filtered | Extra                       |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n|  1 | SIMPLE      | t1    | NULL       | index | NULL          | idx_c1_c2 | 10      | NULL |    1 |   100.00 | Using index; Using filesort |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n1 row in set, 1 warning (0.01 sec)\\n\\n\\n# ====MySQL 8.0演示====\\nmysql&gt; create table t1(c1 int,c2 int,index idx_c1_c2(c1,c2 desc));\\nQuery OK, 0 rows affected (0.02 sec)\\n\\nmysql&gt; insert into t1 (c1,c2) values(1, 10),(2,50),(3,50),(4,100),(5,80);\\nQuery OK, 5 rows affected (0.02 sec)\\n\\nmysql&gt; show create table t1\\\\G\\n*************************** 1. row ***************************\\n       Table: t1\\nCreate Table: CREATE TABLE `t1` (\\n  `c1` int DEFAULT NULL,\\n  `c2` int DEFAULT NULL,\\n  KEY `idx_c1_c2` (`c1`,`c2` DESC)  --注意这里的区别，降序索引生效了\\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci\\n1 row in set (0.00 sec)\\n\\nmysql&gt; explain select * from t1 order by c1,c2 desc;  --Extra字段里没有filesort文件排序，充分利用了降序索引\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+\\n| id | select_type | table | partitions | type  | possible_keys | key       | key_len | ref  | rows | filtered | Extra       |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+\\n|  1 | SIMPLE      | t1    | NULL       | index | NULL          | idx_c1_c2 | 10      | NULL |    1 |   100.00 | Using index |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-------------+\\n1 row in set, 1 warning (0.00 sec)\\n\\nmysql&gt; explain select * from t1 order by c1 desc,c2;  --Extra字段里有Backward index scan，意思是反向扫描索引;\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+\\n| id | select_type | table | partitions | type  | possible_keys | key       | key_len | ref  | rows | filtered | Extra                            |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+\\n|  1 | SIMPLE      | t1    | NULL       | index | NULL          | idx_c1_c2 | 10      | NULL |    1 |   100.00 | Backward index scan; Using index |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+----------------------------------+\\n1 row in set, 1 warning (0.00 sec)\\n\\nmysql&gt; explain select * from t1 order by c1 desc,c2 desc;  --Extra字段里有filesort文件排序，排序必须按照每个字段定义的排序或按相反顺序才能充分利用索引\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n| id | select_type | table | partitions | type  | possible_keys | key       | key_len | ref  | rows | filtered | Extra                       |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n|  1 | SIMPLE      | t1    | NULL       | index | NULL          | idx_c1_c2 | 10      | NULL |    1 |   100.00 | Using index; Using filesort |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n1 row in set, 1 warning (0.00 sec)\\n\\nmysql&gt; explain select * from t1 order by c1,c2;    --Extra字段里有filesort文件排序，排序必须按照每个字段定义的排序或按相反顺序才能充分利用索引\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n| id | select_type | table | partitions | type  | possible_keys | key       | key_len | ref  | rows | filtered | Extra                       |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n|  1 | SIMPLE      | t1    | NULL       | index | NULL          | idx_c1_c2 | 10      | NULL |    1 |   100.00 | Using index; Using filesort |\\n+----+-------------+-------+------------+-------+---------------+-----------+---------+------+------+----------+-----------------------------+\\n1 row in set, 1 warning (0.00 sec)     \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};