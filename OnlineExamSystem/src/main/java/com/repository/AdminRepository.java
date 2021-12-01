package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {
//@Query("SELECT ad FROM Admin ad WHERE ad.username = :un")
//	Optional<Admin> findByusername(@Param("un") String username);
}
