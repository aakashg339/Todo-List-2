package com.learning.todoapp.payload;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoItemDTO {

    private Long id;
    
    @NotNull
    @Size(min = 3, message = "Title must be of atleast 3 characters")
    private String title;

    private Boolean completed;

}
