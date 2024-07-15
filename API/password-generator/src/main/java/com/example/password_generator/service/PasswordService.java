
package com.example.password_generator.service;

import com.example.password_generator.model.Password;
import com.example.password_generator.repository.PasswordRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class PasswordService {
    private final PasswordRepository passwordRepository;

    public PasswordService(PasswordRepository passwordRepository) {
        this.passwordRepository = passwordRepository;
    }

    public Password generatePassword(int length, boolean includeUppercase, boolean includeLowercase, boolean includeNumbers, boolean includeSpecial) {
        String upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lower = "abcdefghijklmnopqrstuvwxyz";
        String numbers = "0123456789";
        String special = "!@#$%^&*()-_+=<>?";

        String all = "";
        if (includeUppercase) all += upper;
        if (includeLowercase) all += lower;
        if (includeNumbers) all += numbers;
        if (includeSpecial) all += special;

        Random random = new Random();
        StringBuilder password = new StringBuilder();

        for (int i = 0; i < length; i++) {
            password.append(all.charAt(random.nextInt(all.length())));
        }

        Password generatedPassword = new Password();
        generatedPassword.setPassword(password.toString());
        generatedPassword.setGeneratedAt(LocalDateTime.now());
        return passwordRepository.save(generatedPassword);
    }


    public List<Password> getPasswordHistory() {
        return passwordRepository.findAllByOrderByIdDesc();
    }

}
