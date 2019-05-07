import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {retry} from 'rxjs/internal/operators';
import {Promise} from 'q';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    /**
     *  登录
     */
    login(user): Observable<any> {
        return this.http.post<any>(environment.BASE_URL + '/api/v1/teacher_login', user).pipe(
            retry(3),
        );
    }

    /**
     *  学生添加课程
     */
    addClass(user): Observable<any> {
        return this.http.post<any>(environment.BASE_URL + '/api/v1/add_class', user).pipe(
            retry(3),
        );
    }

    /**
     * 获取学生的课程列表
     * @param info
     */
    getUserClassList(info): Observable<any> {
        return this.http.post<any>(environment.BASE_URL + '/api/v1/student_class_list', info).pipe(
            retry(3),
        );
    }
}
