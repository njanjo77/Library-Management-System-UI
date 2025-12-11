CREATE DATABASE LibraryManagement;

 USE LibraryManagement;
 --store user information for authentication
 CREATE TABLE Users (
     user_id INT IDENTITY(1,1) PRIMARY KEY,
     username NVARCHAR(50) NOT NULL,
     email NVARCHAR(100) NOT NULL UNIQUE,
     password_hash NVARCHAR(255) NOT NULL, -- Store hashed passwords (e.g., bcrypt output)
     role NVARCHAR(20) NOT NULL CHECK (role IN ('Admin', 'Member')),
     created_at DATETIME2 DEFAULT GETDATE(),
     updated_at DATETIME2 DEFAULT GETDATE()
 );
 
 --store member information
 CREATE TABLE Members (
     member_id INT IDENTITY(1,1) PRIMARY KEY,
     name NVARCHAR(100) NOT NULL,
     email NVARCHAR(100) NOT NULL UNIQUE,
     membership_date DATETIME2 DEFAULT GETDATE(),
     status NVARCHAR(20) NOT NULL CHECK (status IN ('Active', 'Inactive', 'Banned')),
     created_at DATETIME2 DEFAULT GETDATE(),
     updated_at DATETIME2 DEFAULT GETDATE()
 );
--store book categories, will help in filter of books easily in frontend
CREATE TABLE Categories (
    category_id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(50) NOT NULL UNIQUE,
    description NVARCHAR(200),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);
--store book details
CREATE TABLE Books (
    book_id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(100) NOT NULL,
    author NVARCHAR(100) NOT NULL,
    isbn NVARCHAR(20) UNIQUE,
    genre NVARCHAR(50),
    available_copies INT NOT NULL CHECK (available_copies >= 0),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);
--track borrowing of books from the member,
CREATE TABLE BorrowRecords (
    borrow_id INT IDENTITY(1,1) PRIMARY KEY,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    borrow_date DATETIME2 NOT NULL DEFAULT GETDATE(),
    due_date DATETIME2 NOT NULL,
    return_date DATETIME2, -- Null until returned
    status NVARCHAR(20) NOT NULL CHECK (status IN ('Borrowed', 'Overdue', 'Returned', 'Pending')),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (member_id) REFERENCES Members(member_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE
);
--store book reviews and comments
CREATE TABLE Comments (
    comment_id INT IDENTITY(1,1) PRIMARY KEY,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment NVARCHAR(500),
    created_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (member_id) REFERENCES Members(member_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE
);

-- Create Indexes for Performance
CREATE INDEX idx_books_title_author ON Books(title, author);
CREATE INDEX idx_borrowrecords_user_id ON BorrowRecords(user_id);
CREATE INDEX idx_borrowrecords_book_id ON BorrowRecords(book_id);
CREATE INDEX idx_borrowrecords_status ON BorrowRecords(status);

-- Insert Initial Data

-- Insert Categories
INSERT INTO Categories (name, description) VALUES
('Fiction', 'Fictional literature'),
('Non-Fiction', 'Factual and informative books'),
('Science', 'Books on scientific topics');

SELECT * FROM Categories;

-- Insert Users (password hashes are placeholders; in practice, use hashed passwords)
INSERT INTO Users (username, email, password_hash, role) VALUES
('admin', 'admin@library.com', 'hashed_password_admin', 'Admin'),
('member1', 'member1@library.com', 'hashed_password_member1', 'Member'),
('member2', 'member2@library.com', 'hashed_password_member2', 'Member');

SELECT * FROM Users;
SELECT email, password_hash FROM Users WHERE email = 'ujinga@gmail.com';

-- Insert Members
INSERT INTO Members (name, email, status) VALUES
('John Doe', 'john@example.com', 'Active'),
('Jane Smith', 'jane@example.com', 'Active');

SELECT * FROM Members;

-- Insert Books
INSERT INTO Books (title, author, isbn, genre, available_copies) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', '978-0-7432-7356-5', 'Fiction', 5),
('Sapiens', 'Yuval Noah Harari', '978-0-06-231609-7', 'Non-Fiction', 3),
('A Brief History of Time', 'Stephen Hawking', '978-0-553-38016-9', 'Science', 2);

SELECT * FROM Books;

-- Insert Sample Borrow Record
INSERT INTO BorrowRecords (member_id, book_id, borrow_date, due_date, status) VALUES
((SELECT member_id FROM Members WHERE name = 'John Doe'),
 (SELECT book_id FROM Books WHERE title = 'The Great Gatsby'),
 GETDATE(),
 DATEADD(DAY, 14, GETDATE()),
 'Borrowed');

 SELECT * FROM BorrowRecords;

-- Insert Sample Comment
INSERT INTO Comments (member_id, book_id, rating, comment) VALUES
((SELECT member_id FROM Members WHERE name = 'John Doe'),
 (SELECT book_id FROM Books WHERE title = 'Sapiens'),
 4,
 'Very insightful book!');

 SELECT * FROM Comments;

--store system settings
CREATE TABLE Settings (
    setting_id INT IDENTITY(1,1) PRIMARY KEY,
    key_name NVARCHAR(50) NOT NULL UNIQUE,
    value NVARCHAR(255) NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Insert default settings
INSERT INTO Settings (key_name, value) VALUES
('borrow_duration_days', '14'),
('max_books_per_member', '5'),
('fine_per_day', '1.00');
