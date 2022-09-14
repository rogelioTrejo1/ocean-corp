SELECT * FROM Productos;

INSERT INTO Productos (Producto,Categoria,Descriptcion,Precio)
VALUES ('Halo Reach','Poster','Poster de halo donde se mustra el juego',50.5),
       ('Equipo Azul','Poster','Poster de halo donde se mustra el equipo azul',55.5),
       ('BTS','Taza','Taza mostrando al grupo coreano llamado BTS',59.99),
       ('Toradora','Almoada','ALmoada del amine de Toradora',80.75),
       ('Bolografo empresarial','Pluma','Bolografo para tu empresa',19.99),
       ('Agenda 2019 "Dragon Ball Super"','Agenda','Agendal 2019 con diseño del anime popular Dragon Ball Super',60);



SELECT * FROM Productos WHERE Categoria = 'Poster';

SELECT Categoria FROM Productos GROUP BY Categoria;

SELECT * FROM Clientes;

DELETE FROM Clientes;

UPDATE Clientes SET Foto_Perfi = '' WHERE ID_Cliente = '';


SELECT * FROM Productos ORDER BY Producto ASC;

SELECT * FROM Productos ORDER BY Producto DESC;

SELECT * FROM Productos ORDER BY Precio ASC;

SELECT * FROM Productos ORDER BY Precio DESC;

SELECT * FROM Productos ORDER BY Categoria ASC;

SELECT * FROM Productos ORDER BY Categoria DESC;

SELECT * FROM Clientes WHERE Nombre_Usuario = jonex720;

SELECT * FROM sessions

DELETE FROM sessions;

ALTER TABLE Datos_Clientes ADD Ayuda text NOT null AFTER Email;

SELECT * FROM Datos_Clientes;

DELETE FROM Datos_Clientes;

UPDATE Datos_Clientes 
SET Calle = '', No_Interno = '',No_Externo = '',Fraccionamiento = '',Codigo_Postal = '',Telefono = '',Email = '', Ayuda = ''
WHERE ID_Cliente = ''

UPDATE Clientes 
SET Nombre = '',Apellido_Paterno = '',Apellido_Materno = '', Nombre_Usuario = '',Contraseña = ''
WHERE ID_Cliente = '';

SELECT P.ID_Pedido, P.Envio_Domicilio, P.Tipo_Pago, P.Fecha_Realizado, P.Fecha_Entrega, P.Especificaciones, P.Total_Pagar 
FROM Pedidos P INNER JOIN Clientes C ON P.ID_Cliente=C.ID_Cliente 
WHERE C.ID_Cliente = '';



INSERT INTO Productos(Producto,Categoria,Descriptcion,Precio,Imagen)
VALUES
    ('Agenda gati', 'Agenda', 'Agenda con diseño de un gato hermoso', 70, 'https://www.google.com.mx/search?q=cuadernos+con+dise%C3%B1o+de+gatos&tbm=isch&tbs=rimg:CXpo3_1kIgiuoIjirgaDjaw3KMLf8YiKpYYKXHQxd6K_1UQNIbkV-JQfkEB9fLq2DmTa1DNh_1TULbOcUfzs4K2A9c-8CoSCauBoONrDcowEei8iW-rrfokKhIJt_1xiIqlhgpcRNcwPcYOK4BUqEgkdDF3or9RA0hG7I1UgmWOYISoSCRuRX4lB-QQHEV7vpdJFcx50KhIJ18urYOZNrUMRX2pEf5yld9IqEgk2H9NQts5xRxEFKyxL1X8fkioSCfOzgrYD1z7wETGLRMutFTxU&tbo=u&sa=X&ved=2ahUKEwjol9qhuZniAhUFDHwKHd4UBc0Q9C96BAgBEBg&biw=1366&bih=608&dpr=1#imgrc=3tQ8G0mIUEn6DM:'),
    ('Agenda mickey', 'Agenda','Agenda con diseño de Mickey Mouse', 70, 'https://www.google.com.mx/search?q=agenda+mickey&tbm=isch&tbs=rimg:CSy7BPTeNyh9IjgZJXsROAsK0gvlL9ouov3F4Pkk8mrMBkGpl9DiZntUmhV-Sr0OPX00-_1mVdkcz3i7GwwNM0F4toCoSCRklexE4CwrSETqjid9sTTS8KhIJC-Uv2i6i_1cURYuEaWhuouR8qEgng-STyaswGQRH7v9whc5uwZyoSCamX0OJme1SaEYEUzUn699bRKhIJFX5KvQ49fTQRdgPqaDQFIG0qEgn7-ZV2RzPeLhEHvD4hq4zjpSoSCcbDA0zQXi2gEQ8KOmTez2n_1&tbo=u&sa=X&ved=2ahUKEwiM-6uGuJniAhXnsFQKHdV4AZoQ9C96BAgBEBg&biw=1366&bih=608&dpr=1#imgrc=LLsE9N43KH3fBM:'),
    ('Agenda penguin', 'Agenda', 'Agenda con diseño de un pingüino animado', 70, 'https://www.google.com.mx/search?biw=1366&bih=608&tbm=isch&sa=1&ei=cuDZXIT7EIaUtQXew7SICg&q=cuadernos+con+dise%C3%B1o+de+pinguinos&oq=cuadernos+con+dise%C3%B1o+de+pinguinos&gs_l=img.3...18472.20822..21277...0.0..1.695.2121.0j7j0j2j0j1......0....1..gws-wiz-img.eZjvQDpeGX4#imgdii=-LmTnMx_cw7VVM:&imgrc=SMxyBeWDlHRKPM:'),
    ('Agenda love', 'Agenda', 'Agenda con diseño amoroso', 70, 'https://www.google.com.mx/search?biw=1366&bih=608&tbm=isch&sa=1&ei=cuDZXIT7EIaUtQXew7SICg&q=cuadernos+con+dise%C3%B1o+de+pinguinos&oq=cuadernos+con+dise%C3%B1o+de+pinguinos&gs_l=img.3...18472.20822..21277...0.0..1.695.2121.0j7j0j2j0j1......0....1..gws-wiz-img.eZjvQDpeGX4#imgdii=tlO2Nwo4Jc8ukM:&imgrc=NRFIGm-stoilLM:'),
    ('Agenda personalizada', 'Agenda', 'Agenda con el año especificado', 70, 'https://www.google.com.mx/search?biw=1366&bih=608&tbm=isch&sa=1&ei=iuHZXIS1EISqsgXs-Y2oAw&q=agendas+con+dise%C3%B1o+personalizado+a%C3%B1os&oq=agendas+con+dise%C3%B1o+personalizado+a%C3%B1os&gs_l=img.3...20979.21768..21936...0.0..0.111.539.0j5......0....1..gws-wiz-img.7byT_yLOxyc#imgrc=6XvJ41hsgfD4BM:'),
    ('Almohada tu diseño aquí', 'Almohada', 'Almohada personalizable', 390, 'https://www.google.com/search?q=almohada+con+tu+dise%C3%B1o+aqui&tbm=isch&tbs=rimg:CfzXyIU6XTelIjjGLdefROH1XLRAJ2lSsHoF_1RonQWJdgQz88h7An8vwJEpPwlGxb2QMVC9KNZXfLc-6KG6EjglboyoSCcYt159E4fVcEaotf_1JNIHXiKhIJtEAnaVKwegURKPlA-W_1uBCcqEgn9GidBYl2BDBHoMUe7cOONoyoSCfzyHsCfy_1AkEZlCY795zIQyKhIJSk_1CUbFvZAwRRClxvYIIBnoqEglUL0o1ld8tzxEhNatlMxUKVioSCbooboSOCVujEQUEaueW0SgC&tbo=u&sa=X&ved=2ahUKEwjgzpu-ipziAhW6JTQIHWQ6BowQ9C96BAgBEBg&biw=1366&bih=608&dpr=1#imgdii=xi3Xn0Th9VyhDM:&imgrc=_NfIhTpdN6U4qM:'),
    ('Almohada Mr. and Miss', 'Almohada', 'Almohada para parejas', 750, 'https://www.google.com/search?tbm=isch&q=almohada+con+dise%C3%B1o+personalizado+love&spell=1&sa=X&ved=0ahUKEwjx0qPGiJziAhUNOK0KHVzOAekQBQg6KAA&biw=1366&bih=608&dpr=1#imgdii=HVhIe8MQf6jomM:&imgrc=ZC5A2MUb2qs6RM:'),
    ('Almohada Best Friends', 'Almohada', 'Almohada con diseño Best Friends', 750, 'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=w0DbXNK5CueMtgWf0LuQDg&q=almohada+con+dise%C3%B1o+mejores+amigos&oq=almohada+con+dise%C3%B1o+mejores+amigos&gs_l=img.3...220741.225381..225683...0.0..0.145.1703.1j15......0....1..gws-wiz-img.......0j0i30.p8TVL0EMiqk#imgrc=viUU2w1VFeGzSM:'),
    ('Almohada Penguin', 'Almohada', 'Almohada con pinguinos', 390, 'https://www.google.com/search?q=almohada+con+dise%C3%B1o+pinguinos&tbm=isch&tbs=rimg:Cbkd85N3XBCKIjixckwe5lZi7Phl5QzSy80vLa7oBTkJyQCw1kHV5Wvwe2L7pt-i7J-jURE1n82iu_1CuWa_1FivEa0ioSCbFyTB7mVmLsER0I2447FkNmKhIJ-GXlDNLLzS8Rz0Zg35OmbKgqEgktrugFOQnJABH3g5SSM3anUCoSCbDWQdXla_1B7EaYXzh-pQU4UKhIJYvum36Lsn6MRyJ_1JVd63I9IqEglRETWfzaK78BFiTSbFILkY8CoSCa5Zr8WK8RrSEfKXk7WCk5G1&tbo=u&sa=X&ved=2ahUKEwi8vcfgiZziAhUyJzQIHenYB2oQ9C96BAgBEBg&biw=1366&bih=608&dpr=1#imgrc=YahfNxZz07X6WM:'),
    ('Almohada Frases', 'Almohada', 'Almohada con diseño de frases', 390, 'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=NUHbXLWZLsLetQWilIKICg&q=almohada+con+dise%C3%B1o+personalizado+peliculas&oq=almohada+con+dise%C3%B1o+personalizado+peliculas&gs_l=img.3...291194.292774..292973...0.0..0.114.969.0j9......0....1..gws-wiz-img.yzgMLTaucSk#imgrc=NlPyFriAP0VCgM:'),
    ('Gorra imagen personalizada', 'Gorra', 'Gorra con una imagen personalizada', 65, 'https://www.google.com.mx/search?rlz=1C1CHBD_esMX831MX831&biw=1366&bih=608&tbm=isch&sa=1&ei=JtvZXKOoCtDysQWSw7TIAg&q=gorras+con+imagen+personalizada&oq=gorras+con+imagen+personalizada&gs_l=img.3...832583.837284..837491...0.0..4.1823.10314.1j5j4j2j2j3j8-3......0....1..gws-wiz-img.......0j0i8i30j0i24.4Kz8LXS1dFU#imgrc=dxZ1Ete44Do0hM:'),
    ('Gorra Avicci', 'Gorra', 'Gorras con el diseño Avicci', 65, 'https://www.google.com.mx/search?rlz=1C1CHBD_esMX831MX831&tbm=isch&sa=1&ei=xN7ZXN7MMIa0swWYkaHQDw&q=gorras+con+dise%C3%B1o+de+avicci&oq=gorras+con+dise%C3%B1o+de+avicci&gs_l=img.3...14354.15480..15887...0.0..0.112.628.1j5......0....1..gws-wiz-img.......0.4zHPEMarLcw#imgrc=lnIk-nFD0E0ShM:'),
    ('Gorras best friends', 'Gorra', 'Gorras con diseño mejores amigos', 120, 'https://www.google.com.mx/search?rlz=1C1CHBD_esMX831MX831&tbm=isch&sa=1&ei=oN3ZXJDMNcm8sAXq85_IBw&q=gorras+con+dise%C3%B1o+de+best+friends&oq=gorras+con+dise%C3%B1o+de+best+friends&gs_l=img.3...106850.111727..112175...3.0..0.143.1962.0j17......0....1..gws-wiz-img.......0.5tJgvpb5tC4#imgrc=jaDMbfZPnJYqFM:'),
    ('Gorra Avengers', 'Gorra', 'Gorra con el diseño de Avengers', 65, 'https://www.google.com.mx/search?rlz=1C1CHBD_esMX831MX831&tbm=isch&sa=1&ei=hN3ZXK_bHIG-sAWn-qZg&q=gorras+con+dise%C3%B1o+de+avengers&oq=gorras+con+dise%C3%B1o+de+avengers&gs_l=img.3...24593.27303..27590...0.0..0.149.990.0j8......0....1..gws-wiz-img.......0.i5kYn3RNslQ#imgrc=wVf7nHwtTmwJiM:'),
    ('Gorra con corona', 'Gorra', 'Gorra con diseño rey', 65, 'https://www.google.com.mx/search?rlz=1C1CHBD_esMX831MX831&biw=1366&bih=608&tbm=isch&sa=1&ei=q9rZXKybJM_YsAW7q4KgCg&q=gorras+con+dise%C3%B1o+de+princesas&oq=gorras+con+dise%C3%B1o+de+princesas&gs_l=img.3...119002.121393..121760...0.0..0.172.1260.0j10......0....1..gws-wiz-img.......0.pzlgKsxh-tU#imgrc=wxvMsTCZKz0VDM:'),
    ('Gorra con nombre', 'Playera', 'Gorra con tu nombr', 65, 'https://www.google.com.mx/search?rlz=1C1CHBD_esMX831MX831&biw=1366&bih=608&tbm=isch&sa=1&ei=JtvZXKOoCtDysQWSw7TIAg&q=gorras+con+nombre&oq=gorras+con+nombre&gs_l=img.3..0l8.145659.150185..151169...0.0..0.174.2007.0j17......0....1..gws-wiz-img.pS-PpInPmYU#imgrc=vYDoCQTaHBtMSM:'),
    ('Playera Harry Potter', 'Playera', 'Payera con diseño de Harry Potter', 120, 'https://www.google.com/search?q=playera+con+el+dise%C3%B1o+harry+potter&rlz=1C1CHBD_esMX831MX831&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjN09mtjJziAhVUJzQIHTzbCXgQ_AUIDigB&biw=1366&bih=608#imgrc=CL46T75eAXeM2M:'),
    ('Playera Avengers', 'Playera', 'Playera con disño de Avengers', 120, 'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=1kLbXOXDDo6UsgWa1oM4&q=playera+con+dise%C3%B1o+avengers&oq=playera+con+dise%C3%B1o+avengers&gs_l=img.3...70668.75777..75951...0.0..0.135.2965.0j27......0....1..gws-wiz-img.......0j0i67j0i8i30j0i30.-e2f4mx7UM8#imgrc=QTdwN5uKBLOvOM:'),
('Playera Best Friends','Playera','Playera con diseño Mejores Amigos',210,'https://www.google.com/search?q=playera+con+diseño+mejores+amigos&tbm=isch&tbs=rimg:CQblijYAQo4DIjgEbnfQdORWTyUYrHSIWiL9RiIJw7nV2KTwlTyvqUidpTI-38lWnHY7b1fXab7IFfeKa0sdDSHTFCoSCQRud9B05FZPEb6TWHFT95iQKhIJJRisdIhaIv0RntE6fiEMpR0qEglGIgnDudXYpBFiOwrzhrwP3CoSCfCVPK-pSJ2lETzo8IPcKt5HKhIJMj7fyVacdjsRMd1q9GTZpswqEglvV9dpvsgV9xGl9T2FizvTCyoSCYprSx0NIdMUEfJOCp4QvB1I&tbo=u&sa=X&ved=2ahUKEwiohfrBi5ziAhXpJDQIHdn8CHQQ9C96BAgBEBg&biw=1366&bih=657&dpr=1#imgrc=b1fXab7IFfcSAM:'),
('Playera Navidad','Playera','Playera con diseño navideño',120,'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=WETbXPjJC8TktQWS5InICA&q=playera+con+dise%C3%B1o+equipos&oq=playera+con+dise%C3%B1o+equipos&gs_l=img.3...9481.10940..11909...0.0..0.116.744.0j7......0....1..gws-wiz-img.hYNuFgP0kvw#imgdii=Ufe6qRqyElDivM:&imgrc=rPhXOoV7Yh0dpM:'),
('Pluma Spiderman','Pluma','Pluma con diseño de Spiderman',120,'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=pT7bXIfvDM2IsQXejJpg&q=plumas+con+dise%C3%B1o+de+spiderman&oq=plumas+con+dise%C3%B1o+de+spiderman&gs_l=img.3...13097.19774..20069...1.0..0.145.2736.0j24......0....1..gws-wiz-img.......0j0i5i30j0i8i30j0i30.6oCcIoSGbWA#imgrc=T6Q4YQy-VY0v9M:'),
('Plumas para empresas','Pluma','Pluma personalizada para empresas',15,'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=-D7bXJWXBdHysQXAhIuIBw&q=plumas+para+empresas&oq=plumas+para+empresas&gs_l=img.3..0i24.21293.23033..23563...0.0..0.162.581.0j5......0....1..gws-wiz-img.HcSWNDNiDt4#imgrc=4nJoyG_uooxG2M:'),
('Pluma personalizada','Pluma','Pluma personalizada',15,'https://www.google.com/search?q=plumas+con+impresiones&tbm=isch&tbs=rimg:CcQuSBCQYIdfIjhelhSZGLQaPZBj7uVeWr3ydM2Ce9hQtysl02vroAlmiLUnRpWlhQcAPCt3Wow2mLjhYy0AKK4isCoSCV6WFJkYtBo9EYNskyFksRldKhIJkGPu5V5avfIR8NifKzrOg_1QqEgl0zYJ72FC3KxGlPYD6Kr_1tvyoSCSXTa-ugCWaIEUhk2ALVRxSRKhIJtSdGlaWFBwARCnpg_1MHytUwqEgk8K3dajDaYuBG76IE_1NckH9yoSCeFjLQAoriKwEeGGE_1SIHf4o&tbo=u&sa=X&ved=2ahUKEwjAv8qihpziAhXuHTQIHYu5AVEQ9C96BAgBEBg&biw=1366&bih=608&dpr=1#imgdii=C_8VEW7V6tKb6M:&imgrc=tSdGlaWFBwBQNM:'),
('Plumas con nombre','Pluma','Pluma con nombre para identificación o publicidad',15,'https://www.google.com/search?client=firefox-b-d&biw=1150&bih=618&tbm=isch&sa=1&ei=qRPSXJWHHND0swXViYfwDg&q=plumas+con+dise%C3%B1o+personalizado&oq=plumas+con+dise%C3%B1o+personalizado&gs_l=img.3...32942.34468..35138...0.0..0.94.423.5......0....1j2..gws-wiz-img.......0i30.FGgwWvBShPQ#imgdii=njB8fsfgsoaWKM:&imgrc=RgGHEvpfKCQSaM:'),
('Pluma con publicidad','Pluma','Pluma para realizar publicidad',15,'https://www.google.com/search?q=plumas+con+impresiones&rlz=1C1CHBD_esMX831MX831&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjDppW8hZziAhXyoFsKHYddAacQ_AUIDigB&biw=1366&bih=657#imgdii=AYEsih4vA7ExlM:&imgrc=cfYHer7_pFhtKM:'),
('Poster The Beatles','Poster','Poster con diseño de los Beatles',75,'https://www.google.com/search?q=poster+personalizado&rlz=1C1CHBD_esMX831MX831&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi-yJHdjJziAhVUMn0KHeeqC6MQ_AUIDigB&biw=1366&bih=608#imgrc=Oz07hZDZV1TGNM:'),
('Poster Antes del Anochecer','Poster','Poster con diseño Antes del Anochecer',75,'https://www.google.com/search?rlz=1C1CHBD_esMX831MX831&biw=1366&bih=608&tbm=isch&sa=1&ei=JEXbXOa2N4SqsgXPpr3IAQ&q=poster+personalizado+peliculas&oq=poster+personalizado+peliculas&gs_l=img.3...107598.110202..110338...0.0..0.143.1161.0j10......0....1..gws-wiz-img.......0j0i30j0i8i30j0i5i30.CjWdUOUxfwA#imgrc=0SkxVLnWmSXBjM:'),
('Poster Spiderman','Poster','Poster con diseño de Spiderman',75,'https://www.google.com/search?rlz=1C1CHBD_esMX831MX831&biw=1366&bih=608&tbm=isch&sa=1&ei=lEXbXPnsDMu4sQW_vKPwBA&q=poster+personalizado+marvel&oq=poster+personalizado+marvel&gs_l=img.3...92325.93457..93793...0.0..0.128.667.0j6......0....1..gws-wiz-img.......0i8i30j0i24.J3WVhV46DT8#imgdii=zqeaeR7vGklReM:&imgrc=vUmztyt5RUJhxM:'),
('Poster Love','Poster','Poster con diseño love',75,'https://www.google.com/search?q=poster+personalizado+love&tbm=isch&tbs=rimg:Cd1zIAxvKLRoIjhm5WYNKXxVxmW-2rgNNXTeB-THeMOJOz8Htb3NZvsAWSY8yBCLQjf1jvIXMjGm3bJxXI4wu9dZRCoSCWblZg0pfFXGEQ3-OqITmM7vKhIJZb7auA01dN4R4uU7MibrCZMqEgkH5Md4w4k7PxH_1AVMXUGOQOCoSCQe1vc1m-wBZEVxC1argJq2BKhIJJjzIEItCN_1URP5_1zf1Zu1IAqEgmO8hcyMabdshHVmFq7m1QhdyoSCXFcjjC711lEEetYu9tdG1Xq&tbo=u&sa=X&ved=2ahUKEwiY4sncjZziAhX2JzQIHZueBgIQ9C96BAgBEBg&biw=1366&bih=608&dpr=1#imgrc=cVyOMLvXWUQc_M:'),
('Poster Gravity Falls','Poster','Poster con diseño Gravity Falls',75,'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=-EbbXKTDJs6MtgXCl4zAAw&q=poster+personalizado+gravity+falls&oq=poster+personalizado+gravity+falls&gs_l=img.3...9764.14937..15088...0.0..0.243.1777.0j13j1......0....1..gws-wiz-img.......0j0i30j0i8i30j0i5i30.rDmZsbp-cps#imgrc=Dl9ZRXvGey1W8M:'),
('Taza tu serás mi pingüino','Taza','Taza con diseño Tú serás mi pingüino',50,'https://www.google.com.mx/search?biw=1366&bih=608&tbm=isch&sa=1&ei=cuDZXIT7EIaUtQXew7SICg&q=cuadernos+con+dise%C3%B1o+de+pinguinos&oq=cuadernos+con+dise%C3%B1o+de+pinguinos&gs_l=img.3...18472.20822..21277...0.0..1.695.2121.0j7j0j2j0j1......0....1..gws-wiz-img.eZjvQDpeGX4#imgdii=xeJX9lF_ZtuksM:&imgrc=NRFIGm-stoilLM:'),
('Taza con tu diseño','Taza','Taza con diseño personalizado',50,'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=u0fbXL-3AcmsswXUz7KQDg&q=tazas+con+tu+dise%C3%B1o+&oq=tazas+con+tu+dise%C3%B1o+&gs_l=img.3...49196.49920..50281...0.0..0.110.421.0j4......0....1..gws-wiz-img.vwtuYcawgqo#imgrc=mxn9x6XajVZPUM:'),
('Taza Capitan América','Taza','Taza con diseño de Capitán América',50,'https://www.google.com/search?q=tazas+con+dise%C3%B1o+avengers&tbm=isch&tbs=rimg:CdVvMgjwiYr7IjgrfRYDKXrDaBgIAEad9zupN_1IpdzVsp3j6P3S-Gj_1z_1UHdG3pVJTiE0n-IHCFkfbamfsFxY7n03yoSCSt9FgMpesNoEbzdIf9bzPidKhIJGAgARp33O6kRuLJ4XjveMCMqEgk38il3NWyneBFbTklMd8Xb8SoSCfo_1dL4aP_1P9EZ8GAe0dVhqQKhIJQd0belUlOIQRGgR1K1n-zY4qEgnSf4gcIWR9thFTL8GCCh9yZioSCaZ-wXFjufTfEWkybZLx87au&tbo=u&sa=X&ved=2ahUKEwjwiqjPj5ziAhWSIDQIHVyUDaIQ9C96BAgBEBg&biw=1366&bih=608&dpr=1#imgdii=QKpWtmzZSOAzJM:&imgrc=dBqrBane_mWJpM:'),
('Taza con nombre','Taza','Taza con nombre para identificación o publicidad',50,'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=LUjbXICAEYbctQXu_oOoCQ&q=tazas+con+dise%C3%B1o+nombre&oq=tazas+con+dise%C3%B1o+nombre&gs_l=img.3...57903.58876..59219...0.0..0.118.657.0j6......0....1..gws-wiz-img.Wvv0P4IZGJw#imgdii=TWu5HWrDyjpVjM:&imgrc=VL4U-gzfY-UufM:'),
('Taza Frase','Taza','Taza con frase personalizada',50,'https://www.google.com/search?biw=1366&bih=608&tbm=isch&sa=1&ei=n0jbXIbSBcf0tAWbmbDoCQ&q=tazas+con+dise%C3%B1o+frases&oq=tazas+con+dise%C3%B1o+frases&gs_l=img.3...8833.10094..10663...0.0..0.131.685.0j6......0....1..gws-wiz-img.......0i8i30.jaTVzemGbaY#imgdii=BZwgnK2-cwr6tM:&imgrc=H9bqIwo7H47hQM:');


ALTER TABLE Pedidos_Imprecion ADD Documento text NOT null AFTER Papel_Copias;

SELECT * FROM Pedidos_Imprecion;

SELECT * 