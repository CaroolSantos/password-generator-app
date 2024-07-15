
package com.example.password_generator.repository;

import com.example.password_generator.model.Password;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PasswordRepository extends JpaRepository<Password, Long> {
    List<Password> findAllByOrderByIdDesc();
}
