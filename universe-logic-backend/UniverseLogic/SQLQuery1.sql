create database universe_logic1;

USE universe_logic1;
GO

CREATE TABLE ContactMessages (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    message NVARCHAR(MAX) NOT NULL,
    submittedAt DATETIME DEFAULT GETDATE()
);

