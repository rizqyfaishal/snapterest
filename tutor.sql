CREATE INDEX nama_pegawai_index_btree ON pegawai (nama);
CREATE INDEX produsen_produk_index_btree ON produk (produsen);
CREATE INDEX kategori_produk_index_btree ON produk (kategori);

SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'nama_pegawai_index_btree';
SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'produsen_produk_index_btree';
SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'kategori_produk_index_btree';

DROP INDEX nama_pegawai_index_btree;
DROP INDEX produsen_produk_index_btree;
DROP INDEX kategori_produk_index_btree;

// ===============================================================


CREATE INDEX nama_pegawai_index_hash ON pegawai USING HASH (nama);
CREATE INDEX produsen_produk_index_hash ON produk USING HASH (produsen);
CREATE INDEX kategori_produk_index_hash ON produk USING HASH (kategori);

SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'nama_pegawai_index_hash';
SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'produsen_produk_index_hash';
SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'kategori_produk_index_hash';

DROP INDEX nama_pegawai_index_hash;
DROP INDEX produsen_produk_index_hash;
DROP INDEX kategori_produk_index_hash;

// ===============================================================


CREATE INDEX nama_pegawai_index_gin ON pegawai USING GIN (to_tsvector('english',nama));
CREATE INDEX produsen_produk_index_gin ON produk USING GIN (to_tsvector('english',produsen));
CREATE INDEX kategori_produk_index_gin ON produk USING GIN (to_tsvector('english',kategori));

SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'nama_pegawai_index_gin';
SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'produsen_produk_index_gin';
SELECT relname, relkind, reltuples, relpages from pg_class where relname= 'kategori_produk_index_gin';

DROP INDEX nama_pegawai_index_gin;
DROP INDEX produsen_produk_index_gin;
DROP INDEX kategori_produk_index_gin;
