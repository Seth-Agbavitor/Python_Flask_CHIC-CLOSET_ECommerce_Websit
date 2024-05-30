SELECT name FROM sqlite_master WHERE type='table';

SELECT * FROM shirts;
SELECT * FROM users;

SELECT * FROM purchases;
SELECT * FROM cart;
INSERT INTO shirts (samplename) VALUES ('H2H MEN NECT ZIPPER');
DELETE FROM shirts WHERE samplename = 'H2H MEN NECT ZIPPER';

UPDATE shirts
SET samplename= 'POLYESTER VISCOSE GREY MENS FORMAL PANT'
WHERE id = '27';

