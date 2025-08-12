package com.example.TrustCare.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "caregiver")
public class Caregiver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "caregiverid")
    private int careGiverId;

    @Column(name = "fullname",nullable = false, length = 100)
    private String fullName;

    @Column(name = "email",nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "password",nullable = false)
    private String password;

    @Column(name = "cnic", nullable = false, unique = true, length = 20)
    private String CNIC;

    @Column(name = "experienceYears",nullable = false)
    private int experienceYears;

    // Changed from float to BigDecimal for money-related precision
    @Column(name = "monthlyRate",nullable = false, precision = 10, scale = 2)
    private BigDecimal monthlyRate;

    @CreationTimestamp
    @Column(name = "createdAt",updatable = false)
    private LocalDateTime createdAt;

    private String location;

    @Column(name = "bio")
    private String bio;

    private String contact;

    private String address;

    @Column(name = "isverified",nullable = false, length = 10)
    private String isVerified;

    // Getters and setters

    public int getCareGiverId() {
        return careGiverId;
    }

    public void setCareGiverId(int careGiverId) {
        this.careGiverId = careGiverId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCNIC() {
        return CNIC;
    }

    public void setCNIC(String CNIC) {
        this.CNIC = CNIC;
    }

    public int getExperienceYears() {
        return experienceYears;
    }

    public void setExperienceYears(int experienceYears) {
        this.experienceYears = experienceYears;
    }

    public BigDecimal getMonthlyRate() {
        return monthlyRate;
    }

    public void setMonthlyRate(BigDecimal monthlyRate) {
        this.monthlyRate = monthlyRate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIsVerified() {
        return isVerified;
    }

    public void setIsVerified(String isVerified) {
        this.isVerified = isVerified;
    }
}
