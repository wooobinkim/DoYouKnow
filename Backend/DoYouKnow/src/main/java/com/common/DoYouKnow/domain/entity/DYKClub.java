package com.common.DoYouKnow.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@ToString
public class DYKClub extends BaseEntity{
    private String name;
    private String imgUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id")
    private Category category;


    @OneToMany(mappedBy = "dykClub")
    private List<DYKClubContent> dykClubContents = new ArrayList<>();

}
