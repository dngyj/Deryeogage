package com.kkosunnae.deryeogage.domain.chat;

import com.kkosunnae.deryeogage.domain.board.BoardRepository;
import com.kkosunnae.deryeogage.domain.user.UserEntity;
import com.kkosunnae.deryeogage.domain.user.UserRepository;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.NoSuchElementException;

@Getter
@NoArgsConstructor
public class ChatRoomRequestDto {
    private String roomName;

    private Integer boardId;

    private Long user1;

    private Long user2;

    private LocalDate scheduledDate;

    @Builder
    public ChatRoomRequestDto(Long user1, Long user2, Integer boardId, String roomName) {
        this.user1 = user1;
        this.user2 = user2;
        this.boardId = boardId;
        this.roomName = roomName;
    }


    public ChatRoomEntity toEntity(UserRepository userRepository, BoardRepository boardRepository) {
        if (this.user1 == null || this.user2 == null) {
            throw new IllegalArgumentException("user1과 user2는 null일 수 없습니다.");
        }

        UserEntity user1 = userRepository.findById(this.user1)
                .orElseThrow(() -> new NoSuchElementException("해당 사용자가 존재하지 않습니다."));

        UserEntity user2 = userRepository.findById(this.user2)
                .orElseThrow(() -> new NoSuchElementException("해당 사용자가 존재하지 않습니다."));

        return ChatRoomEntity.builder()
                .boardId(this.boardId)
                .user1(user1)
                .user2(user2)
                .roomName(boardRepository.findById(boardId).get().getTitle())
                .build();
    }

}