create Database HotelKey;
use HotelKey;

create table Employees(
employee_id  INT  Primary Key,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(50) UNIQUE,
phone_number VARCHAR(50),
hire_date DATE,
job_id INT,
salary DECIMAL,
department_id INT
)


create table Jobs(
job_id INT Primary Key,
job_title VARCHAR(50),
min_salary DECIMAL,
max_salary DECIMAL)

create table Departments (
department_id INT Primary Key,
department_name VARCHAR(50),
location_id INT)
create table Locations(
location_id INT Primary Key,
street_address VARCHAR(50),
city VARCHAR(50),
state_province VARCHAR(50),
postal_code VARCHAR(50),
country_id VARCHAR(50))



INSERT INTO Locations VALUES
(100, 'Gulberg III', 'Lahore', 'Punjab', '54000', 'PK'),
(101, 'Blue Area', 'Islamabad', 'Capital', '44000', 'PK'),
(102, 'Shahrah-e-Faisal', 'Karachi', 'Sindh', '74000', 'PK');

INSERT INTO Departments VALUES
(90, 'IT Services', 100),
(91, 'Accounts', 101),
(92, 'Sales & Marketing', 102);
INSERT INTO Jobs VALUES
(1, 'Software Developer', 50000.00, 150000.00),
(2, 'Account Officer', 40000.00, 100000.00),
(3, 'Sales Executive', 30000.00, 90000.00);

INSERT INTO Employees VALUES
(101, 'Ahsan', 'Khan', 'ahsan.khan@company.pk', '03001234567', '2023-04-15', 1, 95000.00, 90),
(102, 'Fatima', 'Raza', 'fatima.raza@company.pk', '03111234567', '2022-09-01', 2, 70000.00, 91),
(103, 'Ali', 'Zafar', 'ali.zafar@company.pk', '03211234567', '2023-01-10', 3, 55000.00, 92);
INSERT INTO Employees VALUES
(104, 'Sara', 'Ahmed', 'sara.ahmed@company.pk', '03051234567', '2024-03-05', 1, 88000.00, 90),
(105, 'Imran', 'Ali', 'imran.ali@company.pk', '03321234567', '2022-12-01', 2, 62000.00, 91),
(106, 'Zainab', 'Iqbal', 'zainab.iqbal@company.pk', '03461234567', '2023-09-15', 3, 58000.00, 92),
(107, 'Usman', 'Khan', 'usman.khan@company.pk', '03011234567', '2024-01-10', 1, 97000.00, 90),
(108, 'Nimra', 'Shahid', 'nimra.shahid@company.pk', '03211234567', '2023-06-25', 2, 64000.00, 91),
(109, 'Tariq', 'Hussain', 'tariq.hussain@company.pk', '03071234567', '2022-10-10', 3, 61000.00, 92);

INSERT INTO Jobs VALUES
(4, 'IT Support Specialist', 40000.00, 80000.00),
(11, 'IT Manager', 90000.00, 180000.00);

INSERT INTO Employees VALUES
(110, 'Bilal', 'Nawaz', 'bilal.nawaz@company.pk', '03161234567', '2023-02-15', 4, 75000.00, 90),
(112, 'Saad', 'Raza', 'saad.raza@company.pk', '03241234567', '2021-05-10', 11, 150000.00, 90);





--Exercise 1:
select * from Employees where department_id=90



--Exercise 2:
select first_name, last_name, salary from Employees order by last_name asc

--Exercise 3:
select TOP 5 * from Employees order by salary 

--Exercise 4:
select employee_id, first_name, last_name from Employees
join jobs on Employees.job_id=Jobs.job_id
where jobs.job_title LIKE '%IT%' 

--Exercise 9:
select Employees.first_name, Employees.last_name, Jobs.job_title from Employees
join jobs on jobs.job_id=Employees.job_id

--Exercise 12:
select avg(salary) from Employees
join Departments on Departments.department_id=Employees.department_id


--Exercise 13:
select count(Employees.employee_id), jobs.job_title from Employees
join jobs on jobs.job_id=Employees.job_id
group by jobs.job_title



--Exercise 14
select Departments.department_name ,count(Employees.employee_id) as noOfEmployee from Employees
join Departments on Departments.department_id=Employees.department_id
group by Departments.department_name
having count(employees.employee_id)>2

--Exercise 15
select Employees.first_name from Employees where Employees.department_id is NULL


--Exercise 16

select Employees.first_name, Employees.last_name, Locations.city from Employees
join Departments on Departments.department_id=Employees.department_id
join Locations on Locations.location_id=Departments.location_id


-- Exercise 17
SELECT Employees.employee_id, Employees.first_name, Employees.salary, Jobs.job_title
FROM Employees
JOIN Jobs ON Jobs.job_id = Employees.job_id
WHERE Employees.salary < Jobs.min_salary;


-- Exercise 18
select Employees.first_name, Employees.last_name, Employees.department_id, Employees.salary
from Employees
where employees.salary=(
select max(salary)
from Employees
where department_id=Employees.department_id
)
-- Exercise 19
select Departments.department_name from Employees
left join Departments on Departments.department_id=Employees.department_id
group by Departments.department_name
having count(employees.employee_id)=0


--Exercise 20
select Employees.employee_id, Employees.first_name, Employees.last_name, Employees.salary
from Employees
where Employees.salary>(
select avg(Employees.salary) from Employees)

--Exercise 21
select Employees.first_name, Employees.last_name, Departments.department_name
from Employees
join Departments on Employees.department_id=Departments.department_id
where Departments.department_name LIKE '%IT%' OR Departments.department_name LIKE '%Sales%'

--Exercise 22
select jobs.job_title from Employees
join jobs on jobs.job_id=Employees.employee_id
group by jobs.job_title
having avg(Employees.salary)>7000

--Exercise 23: 
select Employees.email from Employees
group by email
having count(*)>1


--Exercise 24
SELECT 
  Employees.employee_id, 
  Employees.first_name, 
  Employees.salary,
  Departments.department_name,
  RANK() OVER (
    PARTITION BY Employees.department_id 
    ORDER BY Employees.salary DESC
  ) AS salary_rank
FROM Employees
JOIN Departments 
ON Departments.department_id = Employees.department_id;

--Exercise 25:
select Employees.first_name, Employees.last_name, Employees.salary,
case 
when salary<50000 then 'low'
when salary>=50000 AND salary<=100000 then 'Medium'
when salary>=100000 then 'High'
end
as salary_grade
from employees




