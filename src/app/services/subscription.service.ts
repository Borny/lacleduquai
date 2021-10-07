import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { PreSubscription } from '../models/pre-subscription.model';
import { Member } from '../models/member.model';
import { Course } from '../models/courses.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private readonly API_URL = `${environment.apiUrl}`;
  private readonly PRE_SUBSCRIPTION_URL = `/subscription/pre-subscription`;
  private readonly GET_MEMBERS_URL_ALL = `/subscription/members_all`;
  private readonly GET_FILTERED_MEMBERS_URL = `/subscription/filtered-members`;
  private readonly GET_MEMBERS_URL = `/subscription/members`;
  private readonly GET_COURSES_URL_ALL = `/course/course`;
  private readonly COURSE_URL = `/course`;

  constructor(private http: HttpClient) {}

  // COURSES
  public getCourseList(): Observable<{ courseList: Course[] }> {
    return this.http.get<{ courseList: Course[] }>(
      `${this.API_URL}${this.GET_COURSES_URL_ALL}`
    );
  }

  public updateCourse(courseInfo: Course): Observable<any> {
    return this.http.put<any>(
      `${this.API_URL}${this.COURSE_URL}/${courseInfo._id}`,
      { course: courseInfo }
    );
  }

  public deleteCourse(course: Course): Observable<any> {
    return this.http.delete<any>(
      `${this.API_URL}${this.COURSE_URL}/${course._id}`
    );
  }

  // MEMBERS
  public createMember(formValue: PreSubscription): Observable<any> {
    return this.http.post<any>(
      `${this.API_URL}${this.PRE_SUBSCRIPTION_URL}`,
      formValue
    );
  }

  public getMembersData(
    season: string
  ): Observable<{ message: string; data: Member[] }> {
    return this.http.get<{ message: string; data: Member[] }>(
      `${this.API_URL}${this.GET_MEMBERS_URL_ALL}/${season}`
    );
  }

  public getFilteredMembers(
    courseId: string,
    selectedSeason: string
  ): Observable<{ message: string; data: Member[] }> {
    return this.http.get<{ message: string; data: Member[] }>(
      `${this.API_URL}${this.GET_FILTERED_MEMBERS_URL}/${courseId}/${selectedSeason}`
    );
  }

  public getMemberData(memberId: string): Observable<{ member: Member }> {
    return this.http.get<{ member: Member }>(
      `${this.API_URL}${this.GET_MEMBERS_URL}/${memberId}`
    );
  }

  public updateMember(memberInfo: Member): Observable<any> {
    return this.http.put<any>(
      `${this.API_URL}${this.PRE_SUBSCRIPTION_URL}/${memberInfo._id}`,
      memberInfo
    );
  }

  public deleteMember(member: Member): Observable<any> {
    return this.http.delete<any>(
      `${this.API_URL}${this.GET_MEMBERS_URL}/${member._id}`
    );
  }
}
