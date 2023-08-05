package com.kkosunnae.deryeogage.domain.chat;

import com.kkosunnae.deryeogage.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class ChatMessageService {

    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;
    private final UserRepository userRepository;


    public void markMessagesAsRead(Integer chatRoomId, Long userId) {
        chatMessageRepository.markMessagesAsRead(chatRoomId, userId);
    }
    public int getNonReadCount(Integer chatRoomId, Long userId) {
        return chatMessageRepository.countByChatRoomIdAndReadYNAndUserIdNot(chatRoomId, false, userId);
    }

    /** 마지막 ChatMessage 조회 */
    public ChatMessageResponseDto findLastByChatRoomId(Integer chatRoomId) {
        ChatMessageEntity chatMessage = chatMessageRepository.findTopByChatRoomIdOrderByCreatedDateDesc(chatRoomId);
        return new ChatMessageResponseDto(chatMessage);
    }


    /** ChatMessage 조회 */
    public List<ChatMessageResponseDto> findByChatRoomId(Integer chatRoomId) {
        List<ChatMessageEntity> chatMessages = chatMessageRepository.findByChatRoomId(chatRoomId);
        return chatMessages.stream()
                .map(ChatMessageResponseDto::new)
                .collect(Collectors.toList());
    }

    public ChatMessageResponseDto findById(final Integer chatMessageId) {
        ChatMessageEntity chatMessageEntity = this.chatMessageRepository.findById(chatMessageId).orElseThrow(
                () -> new IllegalArgumentException("해당 ChatMessage가 존재하지 않습니다. chatMessageId = " + chatMessageId));
        return new ChatMessageResponseDto(chatMessageEntity);
    }

    /** ChatMessage 생성 */
    public Integer save(final Integer chatRoomId, final ChatMessageRequestDto requestDto) {
        ChatRoomEntity chatRoomEntity = this.chatRoomRepository.findById(chatRoomId).orElseThrow(
                () -> new IllegalArgumentException("해당 ChatRoom이 존재하지 않습니다. chatRoomId = " + chatRoomId));
        requestDto.setChatRoom(chatRoomEntity);
        return this.chatMessageRepository.save(requestDto.toEntity(userRepository)).getId();
    }

    /** ChatMessage 삭제 */
    public void delete(final Integer chatMessageId) {
        ChatMessageEntity chatMessageEntity = this.chatMessageRepository.findById(chatMessageId).orElseThrow(
                () -> new IllegalArgumentException("해당 ChatMessage가 존재하지 않습니다. chatMessageId = " + chatMessageId));
        this.chatMessageRepository.delete(chatMessageEntity);
    }
}