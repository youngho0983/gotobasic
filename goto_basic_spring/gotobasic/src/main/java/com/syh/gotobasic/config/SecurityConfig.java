package com.syh.gotobasic.config;

import jakarta.servlet.DispatcherType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        System.out.println("Security Config Start");
        http.csrf().disable();

        http.authorizeHttpRequests( (authorizeRequests) ->
                authorizeRequests.requestMatchers("/").permitAll()
                        .dispatcherTypeMatchers(DispatcherType.FORWARD, DispatcherType.ERROR).permitAll()
                        .requestMatchers("/static/**").permitAll()
                        .anyRequest().authenticated()
        );

        // 기본 로그인 폼 사용 (없으면 401만 뜰 수 있음)
        http.formLogin(Customizer.withDefaults());

        return http.build();

    }
}
