package com.learning.todoapp.payload;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoItemDTO {

    @NotNull
    @Min(value = 3)
    private String title;

    private Boolean completed;

}
