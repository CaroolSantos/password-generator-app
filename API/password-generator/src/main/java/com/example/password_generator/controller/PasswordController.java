
package com.example.password_generator.controller;

import com.example.password_generator.model.GeneratePasswordConfig;
import com.example.password_generator.model.Password;
import com.example.password_generator.service.PasswordService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/api/passwords")
public class PasswordController {
    private final PasswordService passwordService;

    public PasswordController(PasswordService passwordService) {
        this.passwordService = passwordService;
    }

    @PostMapping("/generate-password")
    public Password generatePassword(@RequestBody GeneratePasswordConfig generatePasswordConfig) {
        return passwordService.generatePassword(
                generatePasswordConfig.getLength(),
                generatePasswordConfig.isIncludeUppercase(),
                generatePasswordConfig.isIncludeLowercase(),
                generatePasswordConfig.isIncludeNumbers(),
                generatePasswordConfig.isIncludeSpecial()
        );
    }


    @GetMapping("/password-history")
    public List<Password> getPasswordHistory() {
        return passwordService.getPasswordHistory();
    }
}
